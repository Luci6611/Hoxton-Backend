const {Router} = require("express");
const {check} = require("express-validator");
const{validarCampos} = require("../middlewares/validar-campos");
const { login } = require("../controllers/auth");

const router = Router();

router.post("/login",[
      check("email","Ingresa un correo valido").isEmail(),
      check("password","El password o constraseña es obligatorio").notEmpty(), 
      validarCampos,
    
], login);

module.exports = router;   