const {Router } = require("express");
const {validarJWT} = require("../middlewares/validar-jwt");
const{crearCategoria} = require("../controllers/categorias");

const router =Router();


router.get("/", obtenerCategorias);

// router.get("/:id", obtenerCategoria);

router.post("/",[validarJWT], crearCategoria);

// router.put("/:id", actualizarCategoria);   

// router.delete("/:id", borrarCategoria);  

module.exports = router;