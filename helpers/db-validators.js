const Role = require("../models/role");

const esRoleValido = async (role="")=>{
    const existeRole = await Role.findOne({role});  
    if(!existeRole){
        throw new Error(`El rol ${role} no existe en la BD`);
    }
}

module.exports ={
    esRoleValido,
};