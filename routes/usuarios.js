 const {Router} = require("express");
 const {check} = require("express-validator");
 const {usuariosGet,usuariosPost,usuariosPut, usuariosDelete} = require("../controllers/usuarios");
 const router = Router();

 
 // GET
 router.get('/',usuariosGet);

//   POST
router.post('/',[
    check("email","el correo no es valido").isEmail()
],usuariosPost);

// PUT
router.put('/:id',usuariosPut);

// DELETE
router.delete('/:id',usuariosDelete); 
module.exports = router;