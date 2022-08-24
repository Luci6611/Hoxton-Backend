// conexion a mi bas de datos
const mongoose = require('mongoose');

const dbconnection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log('conectado a base de datos');
        
    } catch (error) {
        console.log(error);
        throw new Error("No se puedo conectar a la base de datos");
    }
}
module.exports={
    dbconnection
}