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

 const usuariosPut = async (req, res)=> {
    const { id } = req.params;
    const {_id,password,email,...resto} = req.body;

    // encriptar la contraseña
    if(password){
      const salt=bcrypt.genSaltSync();
      resto.password =bcrypt.hashSync(password, salt);
    }
    const usuario  = await Usuario.findByIdAndUpdate(id,resto,{new:true});

   res.json({
     msg:"Usuario actualizado correctamente",
     usuario,
   });
   }


const usuariosDelete = async (req, res)=> {
  const { id } = req.params;
  // inactivar usuario
  const usuarioBorrado = await Usuario.findByIdAndUpdate(id,{estado:false},{new:true});

    res.json({
      msg:"usuario eliminado correctamente de la base de datos", 
      usuarioBorrado
    });
    }

  module.exports = {
        usuariosGet,
        usuariosPost,
        usuariosPut,
        usuariosDelete,
  };

 