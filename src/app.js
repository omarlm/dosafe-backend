// src/app.js
const express = require('express')
const cors = require('cors');
const app = express()
const routes = require('./routes') // Asegúrate de ajustar la ruta según la estructura de tu proyecto

app.use(cors({
    origin: 'http://localhost:5173' // Asegúrate de reemplazar esto con el origen correcto de tu frontend
}));
app.use(express.json())
app.use(routes)

app.get('/', (req, res) => res.send('Backend Funcionando'))

module.exports = app
