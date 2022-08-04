 const {Router} = require("express");
 const{validarCampos} = require("../middlewares/validar-campos");
 const {esRoleValido, emailExiste, idExiste} = require("../helpers/db-validators")
 const {check} = require("express-validator");
 const {usuariosGet,usuariosPost,usuariosPut, usuariosDelete} = require("../controllers/usuarios");
const { validarJWT } = require("../middlewares/validar-jwt");
const { esAdminRole } = require("../middlewares/validar-rol");
 const router = Router();

 
 // GET
 router.get('/',[
   validarJWT,
    esAdminRole,
    validarCampos  
 ],usuariosGet);


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
router.put('/:id',
[   validarJWT,
    check("id","No es un id de mongo valido").isMongoId(),
    check("id").custom(idExiste),

validarCampos ],usuariosPut);

// DELETE
router.delete('/:id',[ 
   
validarJWT, 
esAdminRole,
check("id","No es un id de mongo valido").isMongoId(),
check("id").custom(idExiste),
validarCampos ]
,usuariosDelete); 
module.exports = router;