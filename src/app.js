// src/app.js
const express = require('express')
const cors = require('cors');
const app = express()
const routes = require('./routes')

const whitelist = ['https://dazzling-figolla-4b1e5d.netlify.app/']

const corsOptions = {
    origin: 'https://dazzling-figolla-4b1e5d.netlify.app' // Reemplaza con el dominio de tu frontend
};

app.use(cors(corsOptions));
app.use(express.json())
app.use(routes)

app.get('/', (req, res) => res.send('Backend Funcionando'))

module.exports = app
