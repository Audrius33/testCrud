const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const itemsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    },

    // value: {
    //     type: Number,
    //     required: true
    // },

})

module.exports = mongoose.model("itemsModel", itemsSchema)