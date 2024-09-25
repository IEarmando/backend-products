const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const db = require('./db');

//configuracion inicial
const app = express();
app.set('port', 4000)
app.listen(app.get('port'));
console.log('Escuchando comunicaciones al puerto ' + app.get('port'));

//middlewares: scripts que nos permiten meternos entre consultas re respuestas
app.use(morgan('dev'));
app.use(cors({
    origin: ['http://127.0.0.1:5500']
}))
app.use(express.json());

//rutas
app.get('/productos', async (req, res) => {
const connection = await db.getConnection();
const resultados = await connection.query('select * from productos')
//console.log(resultados);
res.json(resultados);
})

app.post('/carrito/comprar', async (req, res) => {
    //console.log(req.body);
    if(req.body && req.body.length > 0){
        return res.sendStatus(200);
    }
    res.sendStatus(400);
})

