const express = require("express");
const router = express.Router();
const { protect } = require('../middleware/UserMiddleware');

const { register, login, logout, user, forgotpassword, resetpassword} = require("../controller/UserController");


router.route("/register").post(register);

router.route("/login").post(login);

router.route("/logout").get(logout);

router.route("/user").get(protect, user);

router.route("/forgotpassword").post(forgotpassword);

router.route("/resetpassword/:resetToken").put(resetpassword);


module.exports = router;
