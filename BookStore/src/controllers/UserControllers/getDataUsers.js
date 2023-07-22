const {User} = require("../../db.js")
const { Op } = require("sequelize");

const getAllUsers = async(page = 1)=>{
    const  dataState = {
        state: false,
        text:"",
        detail:""        
        };
    try{
        // const page = 1; // Número de página que deseas mostrar (comienza en 1)
        const pageSize = process.env.PAGES_ITEMS ; // Cantidad de resultados por página
        const offset = (parseInt(page) - 1) * pageSize;
    //     console.log("page---",page);
    //    console.log("pageSize---",pageSize);
    //     console.log("offset",offset)

            const { rows: findusers, count: totalUsers } = await User.findAndCountAll({            
                offset: offset,
                limit: pageSize,
                order: [['createdAt', 'DESC']],
                // where: {
                //   // Aquí puedes agregar condiciones de búsqueda si es necesario
                // },
              })
            //    console.log("findusers --->" ,findusers)
            //   console.log("countUsers-->",countData)
            if (findusers.length > 0){
                // const result = { countData: countData, users: findusers };
                dataState.state = true;
                dataState.text = "Search successful";
                dataState.detail = { totalUsers ,findusers} ;                
                return dataState
            }else{
                dataState.state = false;
                dataState.text = "No users found :::";
                return dataState
            }    
            
    } catch(err){
        dataState.state = false;
        dataState.text = err.message;
        throw new Error(JSON.stringify(dataState));        
    }
}

const getUserByIdentificator = async(idUser)=>{
    const  dataState = {
        state: false,
        text:"",
        detail:""        
        };
    try{
        let userFind ={}
        // console.log("valID",idUser)
        if(validateUUID(idUser)){
            // console.log("valID(1)",idUser)
            userFind = await User.findByPk(idUser)
            // console.log("userFind--",userFind.length)
        }else{
            if(!validateEmail(idUser) ){
                // console.log("validateEmail--",validateEmail)
                dataState.state = false;
                dataState.text = "No users found";
                return dataState
            }else   {
                // console.log("valID(2)",idUser)
                userFind = await User.findOne({
                    where: {
                        email: idUser
                    }
                })
            }
        }
        // console.log("userFind......",userFind)
        if(userFind !== null){
            
            dataState.state = true;
            dataState.text = "Search successful";
            dataState.detail = userFind ;
            return dataState
        }else{
            
            dataState.state = false;
            dataState.text = "No users found";
            return dataState
        }       
    } catch(err){
        // console.log(err);
        dataState.state = false;
        dataState.text = err;
        dataState.detail = err;
        throw new Error(JSON.stringify(dataState));     
    }
}


const getUserByParams = async(querysVars,page = 1)=>{
    const  dataState = {
        state: false,
        text:"",
        detail:""        
        };
    try{       
        const whereCondition = {}; // Objeto para almacenar las condiciones de búsqueda
        const keyValues = ["country", "gender","rol","status","listWish"];

        for (const [key, value] of Object.entries(querysVars)) {
            if (keyValues.includes(key)) {
              if (key === "listWish") {                
                whereCondition[key] = {[Op.contains]: [value] };
                // { [Op.any]: [value] };
              } else {
                whereCondition[key] = value;
              }
            } else {
              whereCondition[key] = { [Op.iLike]: `%${value}%` };
            }
          }
            // console.log(whereCondition)

            // console.log("page_2---",page);
            // const page = 1; // Número de página que deseas mostrar (comienza en 1)
             const pageSize = process.env.PAGES_ITEMS; // Cantidad de resultados por página
            //  console.log("pageSize_2---",pageSize);
             const offset = (parseInt(page) - 1) * pageSize;
            //  console.log("offset_2",offset)
     
        
                const { rows: userFind, count: totalUsers } = await User.findAndCountAll({ 
                    offset: offset,
                    limit: pageSize,
                    where: whereCondition,
                    order: [['createdAt', 'DESC']],
                });

                if(userFind.length > 0){                    
                    dataState.state = true;
                    dataState.text = "Search successful";
                    dataState.detail = { totalUsers ,userFind} ;
                    return dataState
                }else{
                    dataState.state = false;
                    dataState.text = "Search not found";
                    dataState.detail = userFind;
                    return dataState
                }
             

    }catch(err){
        //throw Error(err.message);
        dataState.state = false;
        dataState.text = err.message;
        throw Error(JSON.stringify(dataState));     
    }
}

function validateUUID(variable) {
    const uuidRegex = /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-4[a-fA-F0-9]{3}-[89aAbB][a-fA-F0-9]{3}-[a-fA-F0-9]{12}$/;
    return uuidRegex.test(variable);
  }

  function validateEmail(variable) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(variable);
  }

module.exports = {
    getAllUsers,
    getUserByIdentificator,
    getUserByParams
}