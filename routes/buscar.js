const {Router } = require("express");

const router =Router();

router.get("/:coleccion/:termino",buscar)

module.exports = router;