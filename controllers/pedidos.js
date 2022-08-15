const {request, response, json} = require("express");
const Pedido = require("../models/pedidos");


// GET PARA TRAER TODOS LOS PEDIDOS PAGINADOS
const obtenerLosPedidos = async(req= request, res= response)=>{
    const {limite= 6, desde = 0} = req.query;
    const query = {estado:true};

    const[total,pedidos] = await Promise.all([
        Pedido.countDocuments(query),
        Pedido.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
        .populate("menu", "nombre")
        .populate("usuario", "nombre"),

    ]);

    res.json({
        total,
        menus,
    });
};


module.exports = {
    obtenerLosPedidos,
    
};