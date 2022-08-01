const express = require('express')

class server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosEndPoint = "/api/usuarios";
        this.middleware();
        this.routes();   

    }
    middleware(){
        // carpeta public
        this.app.use(express.static("public"));
    }
            // RUTAS
    routes(){
      this.app.use(this.usuariosEndPoint,require("../routes/usuarios")) 
    }
    listen(){
        this.
        app.listen(this.port,()=>{
            console.log("sevidor inicializado... en el puerto",this.port);
        })
    }
    
}

module.exports = server;
