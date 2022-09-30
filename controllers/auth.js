const {request, response} = require("express");
const Usuario = require("../models/usuarios");
const bcrypt = require("bcryptjs");
const {generarJWT} = require("../helpers/generar-jwt")

const login= async (req=request, res=response)=>{

 const {email, password} = req.body;
try {
 
const usuario = await Usuario.findOne({email});

if(!usuario){
    return res.status(400).json({
        msg:"Email | Password son incorrectos"  
      });
}

if(!usuario.estado){
    return res.status(400).json({
        msg:"Usuario inactivo"  
      });
}


const validaPassword=bcrypt.compareSync(password,usuario.password);
if(!validaPassword){
    return res.status(400).json({
        msg:"Email | Password son incorrectos"  
      });
}

 

const token = await generarJWT(usuario.id);

res.json({
   usuario,
   token,
});

} catch (error) {
  
  res.status(500).json({
    msg:"comuniquese con el administrador"
  });  
}


}


module.exports ={
    login
}
  