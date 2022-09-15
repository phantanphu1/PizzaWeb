const {User} = require("../models/User");

const userController = {

    getAllUser: async (req, res) => {
        try {
            const user = await User.find();
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getAnUser: async (req, res) => {
        try {
          const user = await User.findById(req.params.id);
          res.status(200).json(user);
        } catch (error) {
          res.status(500).json(error);
        }
      },
      updateUser: async (req, res) => {
        try {
          const user = await User.findById(req.params.id);
          //  user.password = await bcrypt.hash(req.body.password, 10);
          await user.updateOne({ $set: req.body });
          res.status(200).json("Update Successfully !");
        } catch (error) {
          res.status(500).json(error);
        }
      },
    deleteUser: async (req, res) => {
        try {
            // xóa luôn khỏi database
            // const user = await User.findByIdAndDelete(req.params.id);
            // chỉ thong báo xóa thành công
            const user = await User.findById(req.params.id);
            res.status(200).json("Delete success fully");
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
}
module.exports = userController;