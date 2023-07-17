const {User} = require("../../db.js")

const userRegister = async (objRegister) => {
    const  dataState = {
        state: false,
        text:"",
        detail:""        
        };
        try { 
            const [User, created] = await User.findOrCreate({
                where: {
                        email: objRegister.email                    
                    },
                    defaults: objRegister
            });
            if (created) {
            // await db.query("INSERT INTO users SET?", objRegister);
            dataState.state = true;
            dataState.text = "User registered successfully";
            dataState.detail = objRegister;
            return dataState;
            } else {
                dataState.state=false;
                dataState.text = "User already exists";
                dataState.detail = objRegister;
                throw new Error(JSON.stringify(dataState));
            }
          } catch (error) {
            dataState.state = false;
            dataState.text = error.message;
            dataState.detail = objRegister;
            throw new Error(JSON.stringify(dataState));
          }


};

module.exports ={
    userRegister
}
