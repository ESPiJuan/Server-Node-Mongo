import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    stock: Number,
    imgURL: String,
}, {
    timestamps: true,
    versionKey: false,
})

export default model('product', productSchema);