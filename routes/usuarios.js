 const {Router} = require("express");
 const{validarCampos} = require("../middlewares/validar-campos");
 const {esRoleValido, emailExiste} = require("../helpers/db-validators")
 const {check} = require("express-validator");
 const {usuariosGet,usuariosPost,usuariosPut, usuariosDelete} = require("../controllers/usuarios");
 const router = Router();

 
 // GET
 router.get('/',usuariosGet);

//   POST
router.post('/',
[
    check("nombre","el nombre es obligatorio").notEmpty(),
    check("password","la contraseña debe tener minimo 6 caracteres").isLength({min:6}),
    check("email","el correo no es valido").isEmail(),
    check("email").custom(emailExiste),
    check("role").custom(esRoleValido),
    validarCampos
],usuariosPost);

// PUT
router.put('/:id',usuariosPut);

// DELETE
router.delete('/:id',usuariosDelete); 
module.exports = router;