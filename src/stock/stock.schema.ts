import {model, Schema} from 'mongoose'

const StockSchema = new Schema({
    name: {
        require: true,
        type: String,
    },
    quantity: {
        require: true,
        type: Number
    },
    price: {
        require: true,
        type: Number
    },
    stockValue: {
        require :true,
        type: Number
    }
}, {
    timestamps: true
})

export default model('productStock', StockSchema)