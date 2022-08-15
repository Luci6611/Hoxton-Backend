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

router.get("/", obtenerLosPedidos);

router.get(
  "/:id",
  [
    check("id", "No es un id de mongo valido").isMongoId(),
    check("id").custom(pedidoExiste), //"validando si producto exite por id"
    validarCampos,
  ],
  obtenerPedido
);

//  router.post("/",NuevoPedido );

module.exports = router;
