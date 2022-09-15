const cartController = require("../controllers/cartController");

const router = require("express").Router();

router.post("/addCard",cartController.AddCard)

router.delete("/:id",cartController.DeleteFromCard)

module.exports = router;