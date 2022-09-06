const {Schema, model} = require("mongoose");

const MenuSchema = Schema({
    nombre:{
        type:String,
        required:[true,"El nombre es obligatorio"],
        unique:true
    },

    estado:{
        type:Boolean,
        default:true,
        required:true
    },

    usuario:{
        type:Schema.Types.ObjectId,
        ref:"Usuario",
        required:true
    },

    categoria:{
        type:Schema.Types.ObjectId,
        ref:"Categoria",
       
    },

    precio:{
        type: Number,
        default:0
    },

    detalle:{
        type:String,
    },

    disponible:{
        type:Boolean,
        default:true
    },
    img:{
        type:String,
    }
    });

   MenuSchema.methods.toJSON = function(){
        const {__v,estado,...menu} = this.toObject();
     
        return menu;
    }


module.exports = model("Menu",MenuSchema);