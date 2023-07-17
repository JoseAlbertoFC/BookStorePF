const {User} = require("../../db.js")

const updUserData =  async(idUser, updatedData) => {
    const  dataState = {
        state: false,
        text:"",
        detail:""        
        };

    try{
        if(!idUser){
            dataState.state = true;
            dataState.text = "The id User is required";
            return dataState;            
        }
        const UserExist = await User.find (idUser);
        if(!UserExist){
            dataState.state = true;
            dataState.text = "The user does not exist";
            return dataState;            
        }else{
            const userUpd = await idUser.update(updatedData);
            if(userUpd > 0){
                dataState.state = true;
                dataState.text = "The user has been updated";
                dataState.detail = userUpd;
                return dataState;
            }else{
                dataState.state = false;
                dataState.text = "No data to update";
                return dataState;
            }
        }

    }catch (err){
        dataState.state = true;
        dataState.text = err.message;
        dataState.detail = err.detail;
        throw new Error(JSON.stringify(dataState));
    }
}
module.exports = updUserData;
