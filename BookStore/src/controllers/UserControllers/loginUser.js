const {User} = require("../../db.js")


const validateLogin  = async (emailValue,passValue) =>{
    const  dataState = {
        state: false,
        text:"",
        detail:""        
        };

try{
    userValidate = await User.findOne({
        where: {
            email: emailValue,
            password:passValue
        }
    })

    if(userValidate){
        
    }
}catch(error){
    dataState.state = false;
    dataState.text = error.message;
    dataState.detail = error.detail;
    throw new Error(JSON.stringify(dataState));
}


}