const { request } = require("express");
const jwt = require("jsonwebtoken");
const { idExiste } = require("../helpers/db-validators");
const Usuario = require("../models/usuarios");

const validarJWT =  async(req = request,res,next)=>{

 const token =   req.header("Authorization");
 if(!token){
    res.status(401).json({
        msg:"No se reconoce el token"
    });
 }
 try {
    
      const {userId} =  jwt.verify(token,process.env.SECRETORPRIVATEKEY);
  

       

        const usuario =await Usuario.findById(userId);
       
        if(!usuario) {
            res.status(401).json({
                msg:"token no valido"
            });
        }
        
          if(!usuario.estado) {
            res.status(401).json({
                msg:"token no valido"
            });
        }

          req.usuario = usuario;
        next();

 } catch (error) {
          
            res.status(401).json({
                msg:"token no valido"
            });
 }
}


module.exports ={
    validarJWT,
}