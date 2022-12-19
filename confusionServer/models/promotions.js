const mongoose = require('mongoose');
const Schema = mongoose.Schema

// load a new type of currency in  mongoose
require('mongoose-currency').loadType(mongoose) 
const Currency = mongoose.Types.Currency

var commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var promotionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: Currency,
        required: true,
        min: 0,
    },
    description: {
        type: String,
        required: true
    },
    
    featured:{
        type: Boolean,
        required: true
    },

    comments: [commentSchema]
}, {
    timestamps: true
});

var Promotions = mongoose.model('Promotions', promotionSchema);

module.exports = Promotions;

