module.exports = (req, res, next) => {
    console.log(req.body)
    console.log(req.body.quantity)
    console.log(req.body.price)

    const {
        title,
        price,
        quantity

    } = req.body

    function errorSend(error, message) {
        res.send({error: error, message: message})
    }

    if (title.length > 100 || title.length < 10) {
        return errorSend(true, 'Pavadinimas turi buti ne trumpesnis nei 10 simboliu')
    }

    // if (!Number(quantity)) {
    //     return errorSend(true, 'Quantity must be included')
    // }
    // if (!Number(price)) {
    //     return errorSend(true, 'Price must be included')
    // }
    if (typeof quantity === 'number') {
        return errorSend(true, 'Quantity must be included')
    }
    if (typeof price === 'number') {
        return errorSend(true, 'Price must be included')
    }

    next()
}