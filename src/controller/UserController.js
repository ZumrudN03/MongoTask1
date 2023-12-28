import { UserModel } from "../model/UserModel.js"

export const getAllUsers = async (req, res) => {
    try {
        const user = await UserModel.find({})
        res.send(user)
    } catch (error) {
        res.send(error.message)
    }
}

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const user = await UserModel.findById(id)
        res.send(user)
    } catch (error) {
        res.send(error.message)
    }
}

export const postUser = async (req, res) => {
    try {
        const { username, email, password, age, isMarried } = req.body;
        const newUser = new UserModel({ username, email, password, age, isMarried });
        await newUser.save();
        res.send('Başarıyla yüklendi');
    } catch (error) {
        res.send(error.message)
    }
}

export const putUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email, password, age, isMarried } = req.body;
        const user = await UserModel.findByIdAndUpdate(id, { username, email, password, age, isMarried });
        res.send(user);
    } catch (error) {
        res.send(error.message)
    }
}

export const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findByIdAndDelete(id);
        res.send(user);
    } catch (error) {
        res.send(error.message)
    }
}