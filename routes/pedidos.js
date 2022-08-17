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
  obtenerPedido,
  NuevoPedido,
} = require("../controllers/pedidos");

const router = Router();
// OBTENER TODOS LOS PEDIDOS

router.get("/",  validarJWT ,obtenerLosPedidos);

// OBTENER UN PEDIDO POR SU ID
router.get(
  "/:id",
  [
    validarJWT,
    check("id", "No es un id de mongo valido").isMongoId(),
    check("id").custom(pedidoExiste), //"validando si producto exite por id"
    validarCampos,
  ],
  obtenerPedido
);
// CREAR PEDIDO
router.post(
    "/",
    NuevoPedido
  );


  

module.exports = router;
