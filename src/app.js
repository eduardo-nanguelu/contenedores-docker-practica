// Paquetes Requeridos
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
require('dotenv').config()

//configurando las rutas
const routes = require('./api/routes/users') // incluye la ruta authors.js file

app.use(routes)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()) // we need to tell server to use json as well

module.exports = app;