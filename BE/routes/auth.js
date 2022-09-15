// const authController = require("../controllers/authController");

// const router = require("express").Router;

// router.post("/register",authController.registerUser);

// module.exports = router;


const authController = require("../controllers/authController");

const router = require("express").Router();

router.post("/register", authController.registerUser);

router.post("/login",authController.loginUser);

router.post("/:id",authController.checkPassword)

module.exports = router;