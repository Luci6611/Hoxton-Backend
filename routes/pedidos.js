const { Router } = require("express");
const {
    obtenerLosPedidos,
    actualizarPedido,
    borrarPedido,
    obtenerPedido,
    NuevoPedido,

  } = require("../controllers/pedidos");
  
  const router = Router();

  
  router.get("/", obtenerLosPedidos);




  

module.exports = router;