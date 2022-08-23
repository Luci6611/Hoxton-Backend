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


// CREAR PEDIDOS NUEVOS

 
const NuevoPedido = async (req = request, res = response) => {
    const {  menu } = req.body;
  
    const data = {
      menu,
      usuario: req.usuario._id,
    };
    const pedido = new Pedido(data);
  
    console.log(pedido);
  
    await pedido.save();

    res.status(201).json({
      msg: "pedido agregado correctamente a la base de datos",
      pedido,
    });
  };
// ACTUALIZAR PEDIDO

const actualizarPedido=async(req= request, res= response)=>{
    const {id}= req.params;
    const  { usuario, date, menu, estado, entrega} = req.body;
    const pedido= await Pedido.findByIdAndUpdate(id,{entrega: true},{new:true});
    res.json({
        msg: "Pedido Realizado",
     
    });
}

// INACTIVAR PEDIDO
const borrarPedido = async(req,res) =>{
    const { id } = req.params;

    const pedidoBorrado = await Pedido.findByIdAndUpdate(
        id,
        { estado:false},
        {new:true}    
        );

        res.json({
            msg:"Pedido borrado",
            pedidoBorrado

        });
};


module.exports = {
    obtenerLosPedidos,
    borrarPedido,
    NuevoPedido,
    actualizarPedido

}