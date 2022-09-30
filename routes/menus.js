const { Router } = require("express");
const { check } = require("express-validator");
const { menuExiste } = require("../helpers/db-validators");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");
const { esAdminRole } = require("../middlewares/validar-rol");
const {
  obtenerLosMenus,
  actualizarMenu,
  borrarMenu,
  obtenerMenu,
  CrearMenu,
} = require("../controllers/menus");

const router = Router();

router.get("/", obtenerLosMenus);


router.get(
  "/:id",
  [
    check("id", "No es un id de mongo valido").isMongoId(),
    check("id").custom(menuExiste), 
    validarCampos,
  ],
  obtenerMenu
);

router.post(
  "/",
  [
    validarJWT,
    esAdminRole,
    check("nombre", "El nombre es obligatorio").notEmpty(),
    check("categoria", "La categoria es obligatoria").notEmpty(),
    validarCampos,
  ],
  CrearMenu
);

router.put(
  "/:id",
  [
    validarJWT,
    esAdminRole,
    check("id", "No es un id de mongo valido").isMongoId(),
    check("id").custom(menuExiste), 
    validarCampos,
  ],
  actualizarMenu
);

router.delete(
  "/:id",
  [
    validarJWT,
    esAdminRole,
    check("id", "No es un id de mongo valido").isMongoId(),
    check("id").custom(menuExiste), 
    validarCampos,
  ],
  borrarMenu
);

module.exports= router;