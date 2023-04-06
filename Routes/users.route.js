const express = require("express");
const router = express.Router();
const userController = require("../Controllers/users.controller");

router.post("/signup", userController.postUser);
router.post("/login", userController.postLogedInUser);

module.exports = router;
