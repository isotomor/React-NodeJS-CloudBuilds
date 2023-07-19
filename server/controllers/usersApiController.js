const User = require("../models/users");
const mongoose = require("mongoose");


const getUsers = async (req, res) => {
    try {
        const users = await User.find({}, "-__v");
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const createUser = async (req, res) => {
    const { name, email, registrationDate } = req.body;
    try {
      const newUser = await User.create({
        _id: new mongoose.Types.ObjectId(),
        name,
        email,
        registrationDate,
      });
      res
        .status(201)
        .json({ message: "Usuario creado correctamente", user: newUser });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  

const updateUserById = async (req, res) => {
    const { id } = req.params;
    const { email } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, { email }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json({ message: "Usuario actualizado correctamente", user: updatedUser });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json({ message: "Usuario eliminado correctamente", user: deletedUser });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
};