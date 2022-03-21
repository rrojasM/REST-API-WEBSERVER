const express = require('express');
var cors = require('cors');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //MIDDLEWARES
        this.middlewares();


        //ROUTAS
        this.routes();
    }

    middlewares() {
        //cors

        this.app.use(cors());
        //Directorio publico
        this.app.use(express.static('public'))

    }

    routes() {

        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    lister() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en ', this.port);
        })
    }
}


module.exports = Server;