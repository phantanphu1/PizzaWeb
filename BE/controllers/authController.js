
const User = require("../models/User");
const bcrypt = require("bcrypt");

const authController = {
    registerUser: async (req, res) => {
        try {
            const hashed = await bcrypt.hash(req.body.password, 10);
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
            });
            const user = await newUser.save();
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //Login
    loginUser: async (req, res) => {
        try {
            const user = await User.findOne({ username: req.body.username });
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!user) {
                res.status(404).json("User username");
            }
            if (!validPassword) {
                res.status(404).json("Wrong passwword");
            }
            if (user && validPassword) {
                res.status(200).json(user);
            }
        } catch (err) {
            res.status(500).json("Wrong password");
        }
    },
    checkPassword: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            const validPassword = await bcrypt.compare(req.body.password, user.password);
            if (!validPassword) {
                res.status(404).json("Wrong password !!!");
            } else {
                res.status(202).json("Correct password");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
};
module.exports = authController;