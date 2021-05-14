const itemsDb = require('../schemas/itemsSchema')

module.exports = {
    saveItems: (req, res) => {
        const {
            title,
            photos,
            ingredients,
            preparation
        } = req.body

        const recipe = new itemsDb()
        recipe.title = title
        recipe.photos = photos
        recipe.ingredients = ingredients
        recipe.preparation = preparation
        recipe.favorite = false
        recipe.reviews = []

        recipe.save().then(data => {
            res.send({success: true})
        })
    },
}