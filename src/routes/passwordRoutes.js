const express = require('express')
const { getWordsByLanguage, generatePassword } = require('../services/passwordGenerator')
const router = express.Router()

router.get('/generate-password/:language', async (req, res) => {
    const language = req.params.language
    const wordsData = await getWordsByLanguage(language)
    if (!wordsData) {
        return res.status(404).json({ error: "Idioma no encontrado" })
    }

    const password = generatePassword(wordsData)
    res.json({ password })
})

module.exports = router
