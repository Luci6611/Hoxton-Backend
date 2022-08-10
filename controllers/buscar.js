const { request, response } = require("express");
const { ObjectId } = require("mongoose").Types;
const Categoria = require("../models/categorias");
const Menu = require("../models/menus");

const coleccionesPermitidas = ["categorias", "menus"];

// buscar por categoria
const buscarCategorias = async (termino = "", res = response) => {
  // verificar si me mando el id
  const isMongoID = ObjectId.isValid(termino);
  if (isMongoID) {
    const categoria = await Categoria.findById(id);
    return res.json({
      results: categoria ? [categoria] : [],
    });
  }

  // VALIDAR SI LA BUSQUEDA SE HACE POR UN NOMBRE
  const regex = new RegExp(termino, "i");

  const categorias = await Categoria.findOne({
    nombre: regex,
    estado: true,
  }).populate("usuario", "nombre");

  res.json({
    results: categorias,
  });
};

const buscar = async (req = request, res = response) => {
  const { coleccion, termino } = req.params;

  // ver si la coleccion esta en las permitidas
  if (!coleccionesPermitidas.includes(coleccion)) {
    return res.status(400).json({
      msg: `Las colecciones permitidas son ${coleccionesPermitidas}`,
    });
  }

  // verificar cual coleccion se recibio
  switch (coleccion) {
    case "categorias":
      buscarCategorias(termino, res);

      break;

    case "menus":
      break;

    default:
      res.status(500).json({
        msg: "Esta busqueda no existe",
      });

      break;
  }
};

module.exports = buscar;
