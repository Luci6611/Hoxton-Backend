const {request, response} = require ("express")

const usuariosGet = (req, res)=> {
    res.json({
      msg:"peticion GET-controllers"
    });
  }

const usuariosPost = (req = request, res = response)=> {
   const {nombre,id,email} = req.body;
    res.json({
      msg:"peticion post-controllers",
       nombre,
       id,
       email,
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

 