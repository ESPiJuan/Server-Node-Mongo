import { Schema, model } from "mongoose";

const buySchema = new Schema({
    user_id: String,
    comment: String,
    products: [],
    date: { type: Date, default: Date.now },
},{
    timestamps: true,
    versionKey: false,
})

export default model('buy', buySchema);