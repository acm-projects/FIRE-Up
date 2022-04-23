const express = require('express')
const router = express.Router()
const Article = require('../models/Article')
module.exports = router



// Getting All Articles
router.get('/all-articles', async (req, res) => {
    try {
        const ArticleData = await Article.find()
        res.json(ArticleData)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// Creating One Article
router.post('/add-article', async (req, res) => {
    const article = new Article ({
        title: req.body.title,
        link: req.body.link, 
        image: req.body.image,
        description: req.body.description
    })
    try {
        const newArticle = await article.save()
        res.status(201).json(newArticle)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

// Updating One Article
router.patch('/:id', getArticleData, async (req, res) => {
    if (req.body.title != null) {
        res.Article.title = req.body.title
    }
    if (req.body.link != null) {
        res.Article.link = req.body.link
    }
    if (req.body.image != null) {
        res.Article.image = req.body.image
    }
    if (req.body.description != null) {
        res.Article.description = req.body.description
    }
    try {
        const updatedArticle = await res.Article.save({validateModifiedOnly: true})
        res.json(updatedArticle)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting One Article
router.delete('/:id', getArticleData, async (req, res) => {
    try {
        await res.Article.remove()
        res.json({ message: 'Deleted Article' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getArticleData(req, res, next) {
    let Article
    try {
        objectId = req.params.id
        Article = await Article.findById(objectId)
        if (Article == null) {
            return res.status(404).json({ message: 'Cannot find Article' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.Article = Article
    next()
}


// Max will always be 39 (n-1 = index)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}