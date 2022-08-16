const {request, response, json} = require("express");
const Pedido = require("../models/pedidos");
const Usuario = require("../models/usuarios");
const Menu = require("../models/menus");


// GET PARA TRAER TODOS LOS PEDIDOS PAGINADOS
const obtenerLosPedidos = async(req= request, res= response)=>{
    const {limite= 6, desde = 0} = req.query;
    const query = {estado:true};

    const[total,pedidos] = await Promise.all([
        Pedido.countDocuments(query),
        Pedido.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
        .populate("menu", "nombre precio")
        .populate("usuario", "nombre"),

    ]);

    res.json({
        total,
        pedidos,
    });
};

// OBTENER UN PEDIDO POR SU ID

const obtenerPedido = async(req= request, res= response)=>{
    const {id} = req.params;
    const pedido = await Pedido.findById(id)
    .populate("menu", "nombre precio")
    .populate("usuario", "nombre");

res.json({
   pedido,
});

}



// CREAR UN PEDIDO
const  NuevoPedido= async(req=request, res=resolve)=> {

    const  { usuario_id, fecha, menu_id, estado,entrega} = req.body;
    const pedido=new Pedido({usuario: usuario._id, menu: menu._id, fecha: fecha,estado: estado, entrega: entrega });
    await pedido.save();

    res.status(201).json({
    pedido,
    
}); }



module.exports = {
    obtenerLosPedidos,
    obtenerPedido,
    NuevoPedido

}