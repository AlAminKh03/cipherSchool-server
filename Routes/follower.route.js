const express = require("express");
const router = express.Router();
const followerController = require("../Controllers/follower.controller");

router.get("/followers", followerController.getFollower);

module.exports = router;
