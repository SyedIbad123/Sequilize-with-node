const express = require("express");
const router = express.Router();
const UserProfileController = require("../controllers/UserProfileController.js");

// router.get("/get-all-users", UserController.getAllUser);
// router.get("/get-user/:id", UserController.getUserById);
router.post("/create-user-profile", UserProfileController.createUserProfile);
// router.patch("/update-user/:id", UserController.updateUser);
// router.delete("/delete-user/:id", UserController.deleteUser);

module.exports = router;
