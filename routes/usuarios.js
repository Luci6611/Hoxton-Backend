 const {Router} = require("express");
 const router = Router();

 
 // GET
 router.get('/', function (req, res) {
    res.json({
      msg:"hola mundaso-rutas"
    });
  });

//   POST
router.post('/', function (req, res) {
res.json({
  msg:"peticion post-rutas"
});
});

// PUT
router.put('/', function (req, res) {
res.json({
  msg:"peticion put-rutas"
});
});

// DELETE
router.delete('/', function (req, res) {
res.json({
  msg:"peticion delete-rutas"
});
}); 
module.exports = router;