
const { User} = require("../../db")


const userDelete = async (idUser) => {
  // console.log("************controler hotelDelete **********");
  // console.log("idUser*****" +idUser);
  const  dataState = {
    state: false,
    text:"",
    detail:""
    };    
    // console.log(dataState );
  try {
        if (!idUser)  {          
          dataState.text ="The User ID is required";          
          return dataState ;
        };  
        //throw new Error("The hotel ID is required");
    
        // Buscar el hotel por su ID
        const finduser = await User.findByPk(idUser);        
        if (!finduser)  {          
          dataState.text ="User not found";          
          return dataState ;
        }
         
        await finduser.destroy();
        const userBorrado = await User.findByPk(idUser);
         if(!userBorrado ){
            dataState.state = true;
            dataState.text ="User deleted successfully";
          }else{
            dataState.text ="Error trying to delete User";
            dataState.detail =`El ID: ${idUser}`;
          }
          return dataState ;
        //throw new Error("Hotel not found");
        
      } catch (error) {
        dataState.state = true;
        dataState.text = err.message;
        dataState.detail = err.detail;
        throw new Error(JSON.stringify(dataState));
      }
  };

  module.exports = {
    userDelete 
}