const {User} = require("../../db.js")
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const {userNotification} = require('./notification.js');

const saltRounds = 11;

const userRegister = async (name, birthday,country, phone, phoneCode, gender, email, password, dniPasaport, status, rol, photoUser, listWish) => {
    const  dataState = {
        state: false,
        text:"",
        detail:""        
        };
        try {      
            const objdata= {name, birthday,country, phone, phoneCode, gender, email, password, dniPasaport, status, rol, photoUser, listWish}
            // console.log(objdata)

            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const token = crypto.randomBytes(7).toString('hex');

            const userFind = await User.findOne({
                where: {
                    email: email
                }
            })
            if(userFind ){
                dataState.state = false; 
                dataState.text = "User ready exists";
                return dataState;
            }

            //console.log("listWish" ,objRegister.listWish.length);    
            const newUser =await User.create({
                    name: name, 
                    birthday: birthday,
                    country: country, 
                    phone: phone, 
                    phoneCode: phoneCode, 
                    gender:gender, 
                    email:email, 
                    password:hashedPassword,
                    dniPasaport:dniPasaport,
                    status: status,
                    rol:rol,
                    photoUser:photoUser,
                    listWish:listWish,
                    token:token
              });
              
            // console.log("entro try",users);  
            // console.log("created",created); 
            // console.log("entro created");
            if (newUser) {
                // userNotification = async (typeNotification,dataNotification)               
                const dataNotification = {
                    idNotification : 1,
                    idUser: newUser.id,
                    name: newUser.name,
                    email: newUser.email,
                    token: newUser.token
                }
                const enviacorreo = await userNotification(dataNotification)
            // await db.query("INSERT INTO users SET?", objRegister);
            dataState.state = true;
            dataState.text = "User registered successfully";
            dataState.detail =newUser
            return dataState;
            } else {           
                dataState.state = false;     
                dataState.text = "User already exists";
                dataState.detail = newUser;
                throw  Error(JSON.stringify(dataState));
            }
          } catch (error) {
            // console.log(error);
            dataState.state = false;
            dataState.text = "ERROR INSERTANDO USER";
            dataState.detail = error.data ;            
            throw Error(JSON.stringify(dataState));
          }


};





module.exports ={
    userRegister
}
