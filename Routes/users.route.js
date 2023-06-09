const express = require("express");
const router = express.Router();
const userController = require("../Controllers/users.controller");

router.post("/signup", userController.postUser);
router.post("/login", userController.postLogedInUser);
router.get("/getUser/:email", userController.getUser);
router.patch("/getUser/:email", userController.updateBasicInfo);
router.get("/getBio/:email", userController.getbio);
router.patch("/getBio/:email", userController.updatebio);
router.get("/getSocial/:email", userController.getSocial);
router.patch("/getSocial/:email", userController.updateSocial);
router.get("/getInfo/:email", userController.getInfo);
router.patch("/getInfo/:email", userController.updateInfo);
router.get("/getTech/:email", userController.getTech);
router.patch("/getTech/:email", userController.updateTech);
router.patch("/changePass/:email", userController.updatePass);

module.exports = router;
