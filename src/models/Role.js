import { Schema, model } from "mongoose";

const roleSchema = new Schema({
    name: {
        type: String,
        unique: true
    }
}, {
    timestamps: true,
    versionKey: false,
})

export default model('role', roleSchema);