const express = require('express');
var cors = require('cors');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

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
        this.app.get('/api', (req, res) => {
            res.json({
                msg: 'get API'
            })
        });

        this.app.put('/api', (req, res) => {
            res.json({
                msg: 'put API'
            })
        });

        this.app.post('/api', (req, res) => {
            res.status(201).json({
                msg: 'post API'
            })
        });

        this.app.delete('/api', (req, res) => {
            res.json({
                msg: 'delet API'
            })
        });


      
    }

    lister() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en ', this.port);
        })
    }
}


module.exports = Server;