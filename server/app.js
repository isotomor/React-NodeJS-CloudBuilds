require('dotenv').config();
require('./utils/db_mongo')
const express = require('express');
const morgan = require('morgan');
const error404 = require('./middlewares/error404')
const app = express()
const port = 3000
const cors = require('cors');

// Módulos de Rutas
const usersApiRoutes = require('./routes/usersApiRoutes');


// Middlewares
app.use(express.json()); // Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));


app.use(morgan('combined'))
app.use(cors());

//Rutas 

app.get('/',(req,res)=>{
    res.json({msj: `Bienvenido. Usa las siguientes rutas para obtener información sobre usuarios: http://localhost:${port}/api/users`})
})

app.use('/api/users', usersApiRoutes); // Rutas web users

app.use(error404); // Middleware Para ruta no encontrada (404)





app.listen(port, () => {
    console.log(` listening on port http://localhost:${port}`)
})