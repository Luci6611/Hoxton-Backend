const {Router } = require("express");
const {check} = require("express-validator");
const {validarCampos} = require("../middlewares/validar-campos");
const {validarJWT} = require("../middlewares/validar-jwt");
const { categoriaExiste } = require("../helpers/db-validators");
const {  esAdminRole} = require("../middlewares/validar-rol");
const{crearCategoria, obtenerCategorias, obtenerCategoria, actualizarCategoria, borrarCategoria} = require("../controllers/categorias");

const router =Router();


router.get("/", obtenerCategorias);

router.get("/:id",[
    check("id","No es un id de mongo valido").isMongoId(),
    check("id").custom(categoriaExiste),
    validarCampos
], obtenerCategoria);

router.post("/",[
    validarJWT,
    check("nombre","El nombre es obligatorio").notEmpty(),
    esAdminRole,
    validarCampos
], crearCategoria);

router.put("/:id",[
    validarJWT,
    esAdminRole,
    check("id","No es un id de mongo valido").isMongoId(),
    check("id").custom(categoriaExiste),
    check("nombre","El nombre es obligatorio").notEmpty(),
    validarCampos
], actualizarCategoria);   

router.delete("/:id",[
    validarJWT,
    esAdminRole,
    check("id","No es un id de mongo valido").isMongoId(),
    check("id").custom(categoriaExiste),
    validarCampos
], borrarCategoria);  

module.exports = router;