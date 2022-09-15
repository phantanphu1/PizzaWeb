const userController = require("../controllers/userController");

const router = require("express").Router();

//get all user
router.get("/", userController.getAllUser);

router.get("/:id", userController.getAnUser);

router.put("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

module.exports = router;