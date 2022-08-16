const {Schema,  model} = require("mongoose");

const PedidoSchema = Schema({


    
     usuario:{
        type:Schema.Types.ObjectId,
        ref:"Usuario",
        required: true,
    },
     
    fecha:{
        type:Date,
        required:true,
    },
    menu:{  
        type:Schema.Types.ObjectId,
        ref:"Menu",
        required:true,

    },
    entrega: {
        type:Boolean,
       
        default: false,
      },
    estado:{
        type: Boolean,
        default:true,
        required: true,
    },
  
    
});
module.exports = model("Pedido",PedidoSchema);