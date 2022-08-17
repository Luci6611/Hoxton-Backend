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
    const {_id} = req.params;
    const pedido = await Pedido.findById(_id)
    .populate("menu", "nombre precio")
    .populate("usuario", "nombre");

res.json({
   pedido,
});

}



// CREAR UN PEDIDO
const  NuevoPedido= async(req=request, res=resolve)=> {

    const  { usuario_id, fecha, menu_id, estado,entrega} = req.body;

    const pedido= new Pedido({usuario: usuario_id, menu: menu_id, fecha: fecha,estado: estado, entrega:entrega});
    await pedido.save();
    console.log(request);
    res.status(201).json({
        msg:"pedido agregado correctamente a la base de datos",
    pedido,
    
}); 
}

// ACTUALIZAR PEDIDO

const pedidoPut=async(req= request, res= response)=>{
    const {id}= req.params;
    const  { usuario, date, menu, estado, entrega} = req.body;
    const pedido= await Pedido.findByIdAndUpdate(id,{entrega: true},{new:true});
    res.json({
        msg: "Pedido Realizado",
        pedido,
    });
}


module.exports = {
    obtenerLosPedidos,
    obtenerPedido,
    NuevoPedido

}