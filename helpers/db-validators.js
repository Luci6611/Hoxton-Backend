const Role = require("../models/role");
const Usuario = require("../models/usuarios");
const Categoria = require("../models/categorias");
const Menu = require("../models/menus")

const esRoleValido = async (role="")=>{
   
    const existeRole = await Role.findOne({role});  
    
    if(!existeRole){
        throw new Error(`El rol ${role} no existe en la BD`);
    }
}
 
 //  validando si email existe en la base de datos
const emailExiste =async(email)=>{
    
const existeEmail = await Usuario.findOne({email});
if (existeEmail) {
    throw new Error(`El correo ${email} ya existe en la BD`);
};
}
// validar ruta put :id existe en la base de datos 
const idExiste =async(id)=>{
    
    const existeId = await Usuario.findOne({_id:id});
    if (!existeId) {
        throw new Error(`El id ${id} no existe en la Base de Datos`);
    };
    }

// validar si existe categoria por id

const categoriaExiste =async(id)=>{
    
    const existeCategoria = await Categoria.findById(id);
    if (!existeCategoria) {
        throw new Error(`El id ${id} no existe en la Base de Datos`);
    };
    }

    // validar si menu existe por id
    const menuExiste =async(id)=>{
    
        const existeMenu = await Menu.findById(id);
        
        if (!existeMenu) {
            throw new Error(`El Menu con el id ${id} no existe en la Base de Datos`);
        };
        }

module.exports ={
    esRoleValido,
    emailExiste,
    idExiste,
    categoriaExiste,
    menuExiste
};