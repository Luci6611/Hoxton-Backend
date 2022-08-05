const {Schema,  model} = require("mongoose");

const categoriaSchema = Schema({

    nombre:{
        type: "string",
        required:[true,"El nombre es obligatorio"],
        unique: true,
    },
    estado:{
        type: "boolean",
        default:true,
        required: true,
    },
    usuario:{
        type:Schema.Types.ObjectId,
        ref:"Usuario",
        required: true,
    },
    
});
module.exports = model("Categoria",categoriaSchema);