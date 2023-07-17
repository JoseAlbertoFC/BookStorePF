const {User} = require("../../db.js")

const  dataState = {
    state: false,
    text:"",
    detail:""        
    };

const getAllUsers = async()=>{
    try{
        const users = await User.findAll()
        if (users.length > 0){
            dataState.state = true;
            dataState.text = "Search successful";
            dataState.detail = users;
            return dataState
        }else{
            dataState.state = false;
            dataState.text = "No users found";
            return dataState
        }        
    } catch(err){
        dataState.state = false;
        dataState.text = err.message;
        throw new Error(JSON.stringify(dataState));        
    }
}

const getUserByIdentificator = async(valID)=>{
    try{
        const user ={}

        if(validateUUID(valID)){
            user = await User.findByPk(id)
        }else{
            if(!validateEmail(variable) ){
                dataState.state = false;
                dataState.text = "No users found";
                return dataState
            }else   {
                user = await User.findOne({
                    where: {
                        email: variable
                    }
                })
            }
        }
        if(user.length > 0){
            dataState.state = true;
            dataState.text = "Search successful";
            dataState.detail = user;
            return dataState
        }else{
            dataState.state = false;
            dataState.text = "No users found";
            return dataState
        }       
    } catch(err){
        //throw Error(err.message);
        dataState.state = false;
        dataState.text = err.message;
        throw new Error(JSON.stringify(dataState));     
    }
}


const getUserByParams = async(variables)=>{
    try{       
        const whereCondition = {}; // Objeto para almacenar las condiciones de búsqueda
        const keyValues = ["country", "gender","rol","status"];

        Object.entries(querysHotel).forEach(([key, value]) => {
            if (keyValues.includes(key)) {
              whereCondition[key] = value;
            } else {
              whereCondition[key] = { [Op.iLike]: `%${value}%` };
            }
          });

          const users = await User.findAll({ 
            whereCondition: whereCondition
        });
        dataState.state = true;
        dataState.text = "Search successful";
        dataState.detail = users;
        return dataState

    }catch(err){
        //throw Error(err.message);
        dataState.state = false;
        dataState.text = err.message;
        throw new Error(JSON.stringify(dataState));     
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