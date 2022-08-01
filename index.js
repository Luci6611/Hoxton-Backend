const ServerClass = require("./models/server.js"); 


require("dotenv").config();

const server = new ServerClass();

server.listen(); 



     