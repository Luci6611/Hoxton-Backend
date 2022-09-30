const { Schema, model } = require("mongoose");

const PedidoSchema = Schema({
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    
  },

  fecha: {
    type: Date,
    default: Date.now(),
  },
  menu: {
    type: Schema.Types.ObjectId,
    ref: "Menu",
    required: [true, "el menu es obligatorio"],
  },
  entrega: {
    type: Boolean,
    default: false,
  },
  estado: {
    type: Boolean,
    default: true,
  },
});
module.exports = model("Pedido", PedidoSchema);