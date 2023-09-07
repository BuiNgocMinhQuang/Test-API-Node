const Users = require("../models/userModel");
const asyncHandle = require("express-async-handler");
const getAllUser = asyncHandle(async (req, res) => {
  try {
    const users = await Users.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const getUserByID = asyncHandle(async (req, res) => {
  try {
    const { id } = req.params;
    const users = await Users.findById(id);
    res.status(200).json(users);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const addNewUser = asyncHandle(async (req, res) => {
  try {
    const users = await Users.create(req.body);
    res.status(200).json(users);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
const updateUserInfo = asyncHandle(async (req, res) => {
  try {
    const { id } = req.params;
    const users = await Users.findByIdAndUpdate(id, req.body);
    if (!users) {
      res.status(404);
      throw new Error(`cannot find any user with ID ${id}`);
    }
    const updatedUser = await Users.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const deleteUser = asyncHandle(async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findByIdAndDelete(id);
    if (!user) {
      res.status(404);
      throw new Error(`cannot find any user with ID ${id}`);
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
module.exports = {
  getAllUser,
  getUserByID,
  addNewUser,
  updateUserInfo,
  deleteUser,
};
