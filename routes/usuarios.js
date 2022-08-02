 const {Router} = require("express");
 const {usuariosGet,usuariosPost,usuariosPut, usuariosDelete} = require("../controllers/usuarios");
 const router = Router();

 
 // GET
 router.get('/',usuariosGet);

//   POST
router.post('/',usuariosPost);

// PUT
router.put('/:id',usuariosPut);

// DELETE
router.delete('/:id',usuariosDelete); 
module.exports = router;