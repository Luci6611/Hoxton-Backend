const usuariosGet = (req, res)=> {
    res.json({
      msg:"peticion GET-controllers"
    });
  }

const usuariosPost = (req, res)=> {
    res.json({
      msg:"peticion post-controllers"
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

 