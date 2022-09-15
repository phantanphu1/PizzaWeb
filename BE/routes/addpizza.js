const AddpizzaController = require("../controllers/addpizzaController");

const router = require("express").Router();

router.post("/add-pizza");
router.get("/:id",AddpizzaController.GetAnPizza)
module.exports = router;