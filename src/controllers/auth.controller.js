import User from "../models/User";
import Role from "../models/Role";
import jwt from "jsonwebtoken";
import Conf from "../config";
export const signin = async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findOne({ username: username }).populate("roles")
    if (foundUser) {
        const pass = User.comparePassord(password,foundUser.password)
        if (!pass) return res.status(401).json({
            token: null,
            message: 'Invalid Password'
        })
        const token = jwt.sign({ id: foundUser._id }, Conf.SECRET, {
            expiresIn: 604800 // 1 Semana
        })
        res.json({token})
    } else {
        const foundUser = await User.findOne({ email: username }).populate("roles")
        if (!foundUser) return res.status(400).json({
            message: 'User Not Found'
        })
        const pass = User.comparePassord(password,foundUser.password)
        if (!pass) return res.status(401).json({
            token: null,
            message: 'Invalid Password'
        })
        const token = jwt.sign({ id: foundUser._id }, Conf.SECRET, {
            expiresIn: 604800 // 1 Semana
        })
        res.json({token})
    }
}
export const signup = async (req, res) => {
    const { username, email, password, roles } = req.body;
    const newUser = new User({
        username,
        email,
        password: await User.encryptPassord(password)
    })
    if (roles) {
        const foundRoles = await Role.find({ name: { $in: roles } })
        newUser.roles = foundRoles.map(role => role._id)
    } else {
        const foundRole = await Role.findOne({ name: 'user' })
        newUser.roles = [foundRole._id]
    }
    const savedUser = await newUser.save();
    console.log(savedUser)
    const token = jwt.sign({ id: savedUser._id }, Conf.SECRET, {
        expiresIn: 604800 // 1 Semana
    })
    res.status(200).json({ token })
}