const db = require('../config/firebaseConfig')
const { capitalizeFirstLetter } = require('../utils/utils.js')


const SYMBOLS = "!@#$%^&*()_+-=[]{}|:',.<>/?"
async function getWordsByLanguage(language) {
    try {
        const docRef = db.collection('words').doc(language)
        const doc = await docRef.get()
        if (!doc.exists) {
            console.log('No such document!')
            return null
        } else {
            return doc.data()
        }
    } catch (error) {
        console.error('Error getting document:', error)
        return null
    }
}

function generatePassword(wordsData) {
    const { subjects, verbs, objects, adjectives, adverbs, articles } = wordsData

    const article = articles[Math.floor(Math.random() * articles.length)]
    const subject = subjects[Math.floor(Math.random() * subjects.length)]
    const verb = verbs[Math.floor(Math.random() * verbs.length)]
    const object = objects[Math.floor(Math.random() * objects.length)]
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
    const adverb = adverbs[Math.floor(Math.random() * adverbs.length)]

    // Construcción de frase
    const passwordParts = [
        article,
        capitalizeFirstLetter(subject),
        verb,
        adverb,
        capitalizeFirstLetter(adjective),
        object,
        Math.floor(Math.random() * 10), // Número aleatorio
        SYMBOLS.charAt(Math.floor(Math.random() * SYMBOLS.length)), // Símbolo aleatorio
    ];


    const password = passwordParts.join('')

    return password
}



module.exports = { getWordsByLanguage, generatePassword }
