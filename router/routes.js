const express = require("express");
const router = express.Router();
const announcementRoutes = require("./announcement.route.js");
const permissionRoutes = require("./permission.route.js");
const userRoutes = require("./user.route.js");
const userProfileRoutes = require("./userprofile.route.js");

router.use("/announcements", announcementRoutes);
router.use("/permissions", permissionRoutes);
router.use("/users", userRoutes);
router.use("/user-profiles", userProfileRoutes);

module.exports = router;
