const {request, response} = require ("express")

const bcrypt = require('bcryptjs');



const Usuario = require("../models/usuarios");

const usuariosGet = async (req = request, res)=> {

  const {limite =6, desde=0} = req.query;
  const usuarios = await Usuario.find({estado:true}).skip(desde).limit(limite);
  const total = await Usuario.countDocuments({estado:true});
    res.json({
      total,
      usuarios,
    });
  }
  const usuariosPost = async (req = request, res = response) => {
    const { nombre, email, password, role } = req.body;
  
    const usuario = new Usuario({ nombre, email, password, role });
  
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);
  
   
    await usuario.save();
  
    res.status(201).json({
      msg: "usuario creado con exito!",
      usuario,
    });
  };

 const usuariosPut = async (req, res)=> {
    const { id } = req.params;
    const {_id,password,email,...resto} = req.body;


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

  const usuarioBorrado = await Usuario.findByIdAndUpdate(id,{estado:false},{new:true});

    res.json({
      msg:"usuario inactivado correctamente de la base de datos", 
      usuarioBorrado,
     
    });
    }

  module.exports = {
        usuariosGet,
        usuariosPost,
        usuariosPut,
        usuariosDelete,
  };

 