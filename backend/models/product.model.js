const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    productName: { type: 'String', required: true },
    description: { type: 'String' },
    age: { type: 'Number', required: true},
    color: { type: 'String', required: true },
    images: [{
        type: String
    }],   
},
    {
        collection: 'products-data'
    }
)

const model = mongoose.model('ProductData', ProductSchema)

module.exports = model