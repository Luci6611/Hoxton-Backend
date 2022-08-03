const {request, response} = require ("express")

const bcrypt = require('bcryptjs');



const Usuario = require("../models/usuarios");

const usuariosGet = (req, res)=> {
    res.json({
      msg:"peticion GET-controllers"
    });
  }

const usuariosPost = async (req = request, res = response)=> {
 
   const {nombre,email,password} = req.body;

   const usuario = new Usuario( {nombre,email,password});

const salt=bcrypt.genSaltSync();
usuario.password =bcrypt.hashSync(password, salt);

  //  Guandando  usuario en la base de datos
   await usuario.save();
 

    res.status(201).json({
      msg:"usuario creado con exito!",
      usuario
    });
    }

 const usuariosPut =  (req, res)=> {
    const { id } = req.params;
   res.json({
     msg:"peticion put-controllers"
   });
   }
const usuariosDelete = (req, res)=> {
    res.json({
      msg:"peticion delete-controllers"
    });
    }

  module.exports = {
        usuariosGet,
        usuariosPost,
        usuariosPut,
        usuariosDelete,
  };

 