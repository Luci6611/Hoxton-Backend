const {Schema,  model} = require("mongoose");

const PedidoSchema = Schema({

pedido:{
        type: String,
        required:[true,"El nombre es obligatorio"],
        unique: true,
    },
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
        type: String,
        enum: ["Pendiente", "Listo"],
        default: "Pendiente",
      },
    estado:{
        type: Boolean,
        default:true,
        required: true,
    },
  
    
});
module.exports = model("Pedido",PedidoSchema);