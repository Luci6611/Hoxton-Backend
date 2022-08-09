const {request, response} = require("express");

const Categoria= require("../models/categorias");
const Menu= require("../models/menus");

const coleccionesPermitidas=["categorias", "productos"];

const buscar = async( req = request, res = response) =>{

    const {coleccion, termino} = req.params;
    
    // ver si la coleccion esta en las permitidas
    if(!coleccionesPermitidas.includes(coleccion)){
        return res.status(400).json({
            msg:`Las colecciones permitidas son ${coleccionesPermitidas}`
        });
    };

    // verificar cual coleccion se recibio
    switch(coleccion){
        case "categorias": 
        

        break;

        case "productos": 

        break;

        default:
            res.status(500).json({
                msg:"Esta busqueda no existe",
            });

            break;
    }

}

module.exports = buscar;