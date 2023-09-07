const express = require("express");

const router = express.Router();
const {
  getAllUser,
  getUserByID,
  addNewUser,
  updateUserInfo,
  deleteUser,
} = require("../controllers/userController");

router.get("/", getAllUser);

router.get("/:id", getUserByID);

//add
router.post("/", addNewUser);

//update
router.put("/:id", updateUserInfo);

//delete
router.delete("/:id", deleteUser);

module.exports = router;
