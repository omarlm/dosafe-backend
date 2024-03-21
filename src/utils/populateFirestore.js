// populateFirestore.js
const db = require('../config/firebaseConfig')

async function addLanguageData() {
    const languages = [
        {
            id: 'es',
            data: {
                language: "es",
                subjects: ["Perro", "Casa", "Arbol", "Cielo"],
                verbs: ["corre", "salta", "cae", "brilla"],
                objects: ["colina", "mar", "bosque", "jardín"],
                adjectives: ["rapido", "grande", "azul", "caliente"],
                adverbs: ["Rapidamente", "Silenciosamente", "Alegremente", "Fuertemente"],
                articles: ["mi", "tu", "su"]
            }
        },
        {
            id: 'en',
            data: {
                language: "en",
                subjects: ["Dog", "House", "Tree", "Sky"],
                verbs: ["runs", "jumps", "falls", "shines"],
                objects: ["hill", "sea", "forest", "garden"],
                adjectives: ["quick", "large", "blue", "warm"],
                adverbs: ["Quickly", "Silently", "Joyfully", "Strongly"],
                articles: ["my", "your", "its"]
            }
        }
        // More languages
    ]

    for (const lang of languages) {
        await deleteDocumentsInCollection(`words/${lang.id}/data`);

        await db.collection('words').doc(lang.id).set(lang.data)
        console.log(`Added data for language: ${lang.data.language}`)
    }
}

async function deleteDocumentsInCollection(collectionPath) {
    const collectionRef = db.collection(collectionPath)
    const snapshot = await collectionRef.get()

    const batch = db.batch()
    snapshot.docs.forEach((doc) => {
        batch.delete(doc.ref)
    })
    await batch.commit()
    console.log(`All documents in '${collectionPath}' have been deleted.`)
}

addLanguageData().catch(console.error)
