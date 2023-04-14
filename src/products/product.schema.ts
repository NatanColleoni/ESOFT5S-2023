import { model, Schema } from "mongoose";

const ProductSchema = new Schema({
    name: {
        require: true,
        type: String,
    },
    price: {
        require: true,
        type: Number
    },quantity: {
        require: true,
        type: Number
    },
}, {
    timestamps: true
})

export default model('Product', ProductSchema)
