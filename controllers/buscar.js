const { request, response } = require("express");
const { ObjectId } = require("mongoose").Types;
const Categoria = require("../models/categorias");
const Menu = require("../models/menus");

const coleccionesPermitidas = ["categorias", "menus"];




const buscarCategorias = async (termino = "", res = response) => {

  const isMongoID = ObjectId.isValid(termino);
  if (isMongoID) {
    const categoria = await Categoria.findById(id);
    return res.json({
      results: categoria ? [categoria] : [],
    });
  }

  
  const regex = new RegExp(termino, "i");

  const categorias = await Categoria.find({
    nombre: regex,
    estado: true,
  }).populate("usuario", "nombre");
       
  res.json({
    results: categorias,
  });
};

const buscarMenus = async (termino = "", res = (res = response)) => {
 
  const isMongoID = ObjectId.isValid(termino);
  if (isMongoID) {
    const menu = await Menu.findById(id);
    return res.json({
      results: menu ? [menu] : [],
    });
  }


  const regex = new RegExp(termino, "i");

  const menus = await Menu.find({
    nombre: regex,
    estado: true,
  })
    .populate("usuario", "nombre")
    .populate("categoria", "nombre");

   

  res.json({
    results: menus,
  });
};
const buscar = async (req = request, res = response) => {
  const { coleccion, termino } = req.params;

 

  if (!coleccionesPermitidas.includes(coleccion)) {
    return res.status(400).json({
      msg: `Las colecciones permitidas son ${coleccionesPermitidas}`,
    });
  }

  
  switch (coleccion) {
    case "categorias":
      buscarCategorias(termino, res);

      break;

    case "menus":
      buscarMenus(termino, res);
      break;

    default:
      res.status(500).json({
        msg: "Esta busqueda no existe",
      });

      break;
  }
};

module.exports = buscar;
