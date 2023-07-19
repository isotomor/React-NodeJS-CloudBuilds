const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersApiController");

router.get("/", usersController.getUsers);
router.get("/:id", usersController.getUserById);
router.post("/create", usersController.createUser);
router.put("/:id", usersController.updateUserById);
router.delete("/:id", usersController.deleteUserById);

module.exports = router;