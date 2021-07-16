import { Schema, model } from "mongoose";
import bycrypt from "bcryptjs";

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: true,
        required: true
    },
    roles: [{
        ref: "role",
        type: Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false,
});
userSchema.statics.encryptPassord = async (password) => {
    const salt = await bycrypt.genSalt(10);
    return await bycrypt.hash(password, salt);
}
userSchema.statics.comparePassord = async (password, recievedPassword) => {
    await bycrypt.compare(password, recievedPassword);
}

export default model('user', userSchema);