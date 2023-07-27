const {envioCorreo} = require("../EnvioCorreos/Send-Manual/Post-Emails.js")
const crypto = require('crypto');

//envioCorreo (name,email,mensaje,subjet) 

const userNotification = async (dataNotification) => {
    try {
        
        // console.log(dataNotification)
        const {idNotification,idUser,name,email,token}= dataNotification
        const serverWeb = process.env.URL_SERVER 
        console.log(serverWeb);
        let subjet = "E-Books"         
        let mensaje = "E-Books portal de venta de libros electronicos"
        
        const TokenEmail= await urlToken(idUser,token)
        // console.log("TokenEmail",TokenEmail)

        if(idNotification === 1){
            subjet = "Bienvenido a E-Books"         
            mensaje = `            
           <h1>Gracias por registrarte en el portal de "E-Books"</h1>
            <p>Aquí podrás encontrar una gran variedad de libros en línea.</p>
            <p>Para poder activar tu usuario en el portal, haz clic en el siguiente botón:</p>
            <a href="${serverWeb}?valtoken=${idNotification}${TokenEmail}" class="activation-button">Activar Usuario</a>
            <p>Deseamos que disfrutes la lectura con nosotros.</p>
            ` }

            if(idNotification === 4){
                subjet = "Cambio de Contraseña para E-Books"         
                mensaje = `            
               <h1>Usted ha solicitado Cambio de contraseña para el portal de "E-Books"</h1>
                
                <p>Para realizar el cambio ed contraseña, haz clic en el siguiente botón:</p>
<<<<<<< HEAD
                <a href="${serverWeb}?valtoken=${idNotification}${TokenEmail}" class="activation-button">Cambiar PassWord</a>
=======
                <a href="${serverWeb}?valtokenPass=${TokenEmail}" class="activation-button">Cambiar PassWord</a>
>>>>>>> bc8710a85ab09023c21efc59c864c4c6f8186064
                
                ` } 
        await envioCorreo(name,email,mensaje,subjet)
        
        
        return true
    } catch (error) {
        console.log(error)
    }
}

const urlToken = (idUser,token) =>{
    const token1 = crypto.randomBytes(20).toString('hex');
    const t1_a= token1.substring(0, 9);
    const t1_b=token1.substring(9, 18);
    //token -- 13 XCXCXCXCXCXCX
    //ID--> 007190b8-b67c-4097-93b2-43402628e23a
   // const cadenaTexto = "007190b8-b67c-4097-93b2-43402628e23a";
    const parte1 = idUser.substring(0, 12);
    const parte2 = idUser.substring(12, idUser.length);
    const parte3 = (idUser.length-12);
    
    // console.log("idUser:", idUser); // "007190b8-b67c"
    // console.log("token:", token); // "-4097-93b2"
    // console.log("token1:", token1); // "007190b8-b67c"
    // console.log("t1_a:", t1_a); // "-4097-93b2"
    // console.log("t1_b:", t1_b); // "-4097-93b2"
    // console.log("Parte 1:", parte1); // "007190b8-b67c"
    // console.log("Parte 2:", parte2); // "-4097-93b2"
    // console.log("Parte 3:", parte3); // "-43402628e23a"
    // console.log("idUser-long",idUser.length); //)
    // console.log("token-long",token.length); //)

    const valtoken = t1_b + parte2 + token + parte1 + t1_a + parte3
    return valtoken
}


module.exports = {
    userNotification,urlToken
}