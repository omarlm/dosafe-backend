const express = require('express')
const passwordRoutes = require('./passwordRoutes')
const router = express.Router()

router.use(passwordRoutes)

module.exports = router
