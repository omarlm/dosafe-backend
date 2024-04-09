// src/app.js
const express = require('express')
const cors = require('cors');
const app = express()
const routes = require('./routes')

const allowedOrigins = ['https://dazzling-figolla-4b1e5d.netlify.app']

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}

app.use(cors(corsOptions));
app.use(express.json())
app.use(routes)

app.get('/', (req, res) => res.send('Backend Funcionando'))

module.exports = app
