const {User} = require("../../db.js")

const updUserData =  async(idUser, updatedData) => {
    const  dataState = {
        state: false,
        text:"",
        detail:""        
        };

    try{
        // console.log("idUser",idUser)
        if(!idUser){           
            dataState.text = "The id User is required";
            return dataState;            
        }

            const UserExist = await User.findByPk(idUser);
            // console.log("UserExist",UserExist)
            if(!UserExist){              
                dataState.text = "The user does not exist";
                return dataState;            
            }else{
                //console.log("******************updatedData***",updatedData)
                const userUpd = await UserExist.update(updatedData);

                // console.log("******************userUpd ***",userUpd )
                if(userUpd){
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
        throw  Error(JSON.stringify(dataState));
    }
}
module.exports = {
    updUserData
};
