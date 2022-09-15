const {User,Cart}= require("../models/User");

const cartController = {
    AddCard: async (req, res) => {
        try {
            const newCart = new Cart(req.body);
            const save = await newCart.save();
            if (req.body.AccountUSer) {
                const idUser = User.findById(req.body.AccountUSer);
                await idUser.updateOne({ $push: { cart: save._id } });
            }
            res.status(200).json(save);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    DeleteFromCard: async (req, res) => {
        try {
            await Users.updateMany(
              {cart: req.params.id },
              {$pull:{cart: req.params.id}}
           );
            await Cart.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete successfully!!")
          } catch (error) {
            res.status(500).json(error);
          }
      },
};
module.exports = cartController;