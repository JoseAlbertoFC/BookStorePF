const { User } = require("../../db.js");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { userNotification } = require("./notification.js");
const saltRounds = 11;

const userTokenActiv = async (querysUser) => {
  
  // c/pass : 4--token - password
  

  try {
    const dataState = {
      state: false,
      text: "",
      detail: "",
    };
    //console.log(querysUser)
    //console.log(valtoken)
    const { id, data1, data2,data3,data4 } = querysUser;
    // console.log("id--->", id);
    switch (id) {
      // activar : 1 --- token ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      case "1": {
        try {
          const { id: idUser, token: tokenUser } = await tokenDecrypt(data1);
          const whereCondition = {
            id: idUser,
            token: tokenUser,
            rol: "new",
          };
          const userValidate = await buscaUsu(whereCondition);
          //console.log("userValidate",userValidate)

          if (userValidate.cantUser > 0) {
            //  console.log("UPDATE ********************")
            const newValor = {
              status: true,
              rol: "user",
              token: null,
            };
            const userChange = await changeUser(whereCondition, newValor);
            //console.log("userChange",userChange)
            if (userChange > 0) {
              dataState.state = true;
              dataState.text = "Welcome - User Activated successfully";
              return dataState;
            } else {
              dataState.state = false;
              dataState.text = "Failed to activate User";
              return dataState;
            }
          } else {
            dataState.state = false;
            dataState.text = "User not found";
            return dataState;
          }
        } catch (err) {
          dataState.state = false;
          dataState.text = err.message;
          throw Error(JSON.stringify(dataState));
        }
        break;
      }
      // LOGIN:1 --- EMAIL Y PASS::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      case "2": {
        try {
          const whereCondition = {
            email: data1,
            status: true,
            rol: { [Op.notIn]: ["new"] },
          };

          const userValidate = await buscaUsu(whereCondition);
          // console.log("userValidate", userValidate);
          if (userValidate.cantUser > 0) {
            // console.log("data2__", data2);

            const userObj = userValidate.findUser[0];
            const passwordDB = userObj.dataValues.password;

            const isMatch = await bcrypt.compare(data2, passwordDB);
            if (isMatch) {
              // console.log("userValidate", userValidate);
              // console.log("userObj", userObj);
              // console.log("Contraseña válida");
              dataState.state = true;
              dataState.text = "User successfully validated";
              dataState.detail = userObj;
              // console.log("dataState", dataState);
              return dataState;
            } else {
              // console.log("Contraseña inválida");
              dataState.state = false;
              dataState.text = "invalid password";
              return dataState;
            }
          } else {
            dataState.state = false;
            dataState.text = "User not found";
            return dataState;
          }
        } catch (err) {
          dataState.state = false;
          dataState.text = err.message;
          throw Error(JSON.stringify(dataState));
        }
        break;
      }
      // RECORDAR PASSWOED:3 --- EMAIL ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      case "3": {
        try {
          const token = crypto.randomBytes(13).toString("hex");
          // console.log("*****3****3******3****3*****************************")
          const whereCondition = {
            email: data1,
            status: true,
            rol: { [Op.notIn]: ["new"] },
          };

          const newValor = {
            token: token,
          };
          const userValidate = await buscaUsu(whereCondition);
          // console.log("userValidate", userValidate);
          if (userValidate.cantUser > 0) {
            const userObj = userValidate.findUser[0];
            const idUser = userObj.id;
            const nameUser = userObj.name;

            const userChange = await changeUser(whereCondition, newValor);
            //console.log("userChange",userChange)
            if (userChange > 0) {
              //const tokenEmail = await urlToken(idUser,token)
              const dataNotification = {
                idNotification: 2,
                idUser: idUser,
                name: nameUser,
                email: data1,
                token: token,
              };
              // console.log("dataNotification ",dataNotification )
              const enviacorreo = await userNotification(dataNotification);

              dataState.state = true;
              dataState.text = "Notification has been sent to the mail";
              return dataState;
            } else {
              dataState.state = false;
              dataState.text = "Error sending email to change password";
              return dataState;
            }
            //urlToken
          } else {
            dataState.state = false;
            dataState.text = "User not found";
            return dataState;
          }
        } catch (err) {
          // console.log("err",err)
          dataState.state = false;
          dataState.text = err.message;
          throw Error(JSON.stringify(dataState));
        }
        break;
      }
      // CAMBIAR PASSWOED:4  TOKEN Y NEW_PASSWORD ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      case "4": {
        try {
          const { id: idUser, token: tokenUser } = await tokenDecrypt(data1);
          const whereCondition = {
            id: idUser,
            token: tokenUser,
            status: true,
            rol: { [Op.notIn]: ["new"] },
          };
          const userValidate = await buscaUsu(whereCondition);
          //console.log("userValidate",userValidate)

          if (userValidate.cantUser > 0) {
            const hashedPassword = await bcrypt.hash(data2, saltRounds);

            const newValor = {
              password: hashedPassword,
              token: null,
            };
            const userChange = await changeUser(whereCondition, newValor);
            if (userChange > 0) {
              dataState.state = true;
              dataState.text = "password updated successfully";
              return dataState;
            } else {
              dataState.state = false;
              dataState.text = "Error change to the password";
              return dataState;
            }
          } else {
            dataState.state = false;
            dataState.text = "No user found for password change";
            return dataState;
          }
        } catch (err) {
          dataState.state = false;
          dataState.text = err.message;
          throw Error(JSON.stringify(dataState));
        }
        break;
      }

      //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      // crear usuario con GMAIL data1--> email / data2--> id_user_google
      case "5": {
        try {
          const userFind = await User.findOne({
            where: {
              email: data1,
            },
          });
          if (userFind) {
            if (userFind.thirdPartyCreated) {
              //true
              if (userFind.password === data2) {
                const t_JWT = await tokenJWTgenerate(userFind.id);

                dataState.state = true;
                dataState.text = "User Validate successfully";
                dataState.detail = { userFind, tokenJwt: t_JWT };
                // console.log(dataState);
                return dataState;
              }else{
                dataState.state = false;
                dataState.text = "Error validating credentials";                
                // console.log(dataState);
                return dataState;
              }
            } else {
              dataState.state = false;
              dataState.text = "User already exists, Validate Password";
              // console.log(dataState);
              return dataState;
            }
          } else {
            const newUser = await User.create({
              email: data1,
              name:data3,
              photoUser:data4,
              password: data2,
              rol: "user",
              thirdPartyCreated: true,
            });
            if (newUser) {
              const t_JWT = await tokenJWTgenerate(newUser.id);
              dataState.state = true;
              dataState.text = "User registered successfully";
              dataState.detail = { newUser, tokenJwt: t_JWT };
              // console.log(dataState);
              return dataState;
            } else {
              dataState.state = false;
              dataState.text = "error validating user - Gmail";
              // console.log(dataState);
              return dataState;
            }
          }
        } catch (err) {
          dataState.state = false;
          dataState.text = err.message;
          throw Error(JSON.stringify(dataState));
        }
        break;
      }
      // crear nuevo JWT por expirar tiempo ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      case "6": {
        try {
          const whereCondition = {
            email: data1,
          };
          const userValidate = await buscaUsu(whereCondition);
          //console.log("userValidate",userValidate)

          if (userValidate.cantUser > 0) {
            const newJWT = await tokenJWTgenerate(userValidate.findUser.id);
            console.log("newJWT ",newJWT )
            dataState.state = true;
            dataState.text = newJWT
            console.log(dataState);
            return dataState;
            
          }
        } catch (err) {
          dataState.state = false;
          dataState.text = err.message;
          throw Error(JSON.stringify(dataState));
        }
        break;
      }
      // AUTENTICAR CON JWT:: EMAIL + JWT::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      case "7": {
        try {

          const userauthorization=   await validatokenJWT(data2)

          if(!userauthorization.est){
            dataState.state = false;
            dataState.text = userauthorization.data;
            // console.log(dataState);
            return dataState;
          }else{

            const whereCondition = {
              email: data1,
            };
            const userValidate = await buscaUsu(whereCondition);
            //console.log("userValidate",userValidate)
  
            if (userValidate.cantUser > 0) {
              dataState.state = true;
              dataState.text = "User Authorization successfully";
              dataState.detail = { userValidate, tokenJwt: data2 };
              // console.log(dataState);
              return dataState;
            }
          }
          
          
          //est: false, data: "token expired"

         
        } catch (err) {
          dataState.state = false;
          dataState.text = err.message;
          throw Error(JSON.stringify(dataState));
        }
        break;
      }

      default: {
        dataState.state = false;
        dataState.text = "no process is done";
        return dataState;
      }
    }
  } catch (err) {
    dataState.state = false;
    dataState.text = err.message;
    throw Error(JSON.stringify(dataState));
  }
};

const validatokenJWT = async (token) => {
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (decodedToken.exp < Date.now() / 1000) {
      return { est: false, data: "token expired" };
    } else {
      const userId = decodedToken.id;
      const userEmail = decodedToken.email;
      //console.log("userId", userId);
      //console.log("userEmail", userEmail);
      return { est: true, data: decodedToken.id };
    }
  } catch (error) {
    return { est: false, data: `Error Token: ${error.message}` };
    // console.log("Error al validar el token:", err.message);
  }
};

const tokenJWTgenerate = async (val_X) => {
  return (tokenJwt = await jwt.sign(
    { userId: val_X },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "24h" }
  ));
};

const buscaUsu = async (whereCondition) => {
  //console.log("whereCondition", whereCondition);
  const { rows: findUser, count: cantUser } = await User.findAndCountAll({
    where: whereCondition,
  });
  return { cantUser, findUser };
};

const changeUser = async (whereCondition, newValor) => {
  try {
    //console.log("whereCondition", whereCondition);
    //console.log("newValor", newValor);
    const userUpd = await User.update(newValor, { where: whereCondition });

    ///console.log("******************userUpd ***", userUpd);
    if (userUpd) {
      return userUpd;
    } else {
      return false;
    }
  } catch (err) {
    // console.log("UPD_err.......", err);
    dataState.state = false;
    dataState.text = err.message;
    throw Error(JSON.stringify(dataState));
  }
};

const tokenDecrypt = (cryptKey) => {
  let x, y;
  let position = cryptKey.substring(cryptKey.length - 2, cryptKey.length); //longituddel token
  (x = 9), (y = x + parseInt(position));
  // console.log(x,y)
  let part2 = cryptKey.substring(x, y);
  (x = y), (y = y + 26); //y+26
  // console.log(x,y)
  let part3 = cryptKey.substring(x, y);
  (x = y), (y = y + 12); //y+12
  // console.log(x,y)
  let part4 = cryptKey.substring(x, y);

  return {
    id: part4 + part2,
    token: part3,
  };
};

module.exports = {
  userTokenActiv,
};
