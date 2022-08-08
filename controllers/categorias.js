    const {request, response} = require ("express");
    const Categoria = require ("../models/categorias");


    const obtenerCategorias = async(req=request, res=response)=>{
        const {limite=6, desde=0} = req.query;

        const consulta={estado:true}

        

    }

 const crearCategoria = async(req=request, res=response)=>{

        const nombre = req.body.nombre.toUpperCase();

        const categoriaDB = await Categoria.findOne({nombre});

        if(categoriaDB){
            return response.status(400).json({
            msg:`La categoria ${categoriaDB} ya existe`
              });
        }

        // generar la data para guardar
        const data ={
            nombre,
            usuario:req.usuario._id,
        }

        const categoria = new Categoria (data);

        await categoria.save();

        res.status(200).json(categoria); 
 }


 module.exports ={
    crearCategoria,
 }