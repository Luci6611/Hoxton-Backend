const { Router } = require("express");
const { check } = require("express-validator");
const { pedidoExiste } = require("../helpers/db-validators");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");
const { esAdminRole } = require("../middlewares/validar-rol");
const {
  obtenerLosPedidos,
  actualizarPedido,
  borrarPedido,
  NuevoPedido,
} = require("../controllers/pedidos");

const router = Router();


router.get("/",  validarJWT ,obtenerLosPedidos);



router.post( "/",[
  validarJWT,
  check("menu","El menu es obligatorio").notEmpty(),
  validarCampos
],
    NuevoPedido
  );

  
  router.put("/:id",[
    validarJWT,
    esAdminRole,
    check("id","No es un id de mongo valido").isMongoId(),
    check("id").custom(pedidoExiste),
    validarCampos
  ],actualizarPedido);
  
  router.delete("/:id",[
    validarJWT,
    esAdminRole,
    check("id","No es un id de mongo valido").isMongoId(),
    check("id").custom(pedidoExiste),
    validarCampos
  ],borrarPedido);

  

module.exports = router;
