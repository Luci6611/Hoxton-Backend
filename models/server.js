const express = require('express');
const {dbconnection} = require("../database/config");
class server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosEndPoint = "/api/usuarios";
        this.authPath = "/api/auth";
        this.categoriasPath = "/api/categorias";

        this.conectarDb ();
        this.middleware();
        this.routes();   

    }
    // conectar a base de datos
     async conectarDb(){
        await dbconnection();
    }

    middleware(){
        // leer el body que manda el frontend
        this.app.use(express.json());
        // carpeta public
        this.app.use(express.static("public"));
    }
            // RUTAS
    routes(){
      this.app.use(this.usuariosEndPoint,require("../routes/usuarios"));
      this.app.use(this.categoriasPath,require("../routes/categorias"));
      this.app.use(this.authPath,require("../routes/auth"));
    }
    listen(){
        this.
        app.listen(this.port,()=>{
            console.log("sevidor inicializado... en el puerto",this.port);
        })
    }
    
}

module.exports = server;
