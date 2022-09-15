const {Pizza} = require("../models/User");

const AddpizzaController ={
    addPizza: async (req, res) => {
        try {
            const newPizza = new Pizza(req.body)
            const savePizza = await newPizza.save()
          res.status(200).json(savePizza);
        } catch (error) {
          res.status(500).json(error);
        }
      },
      GetAnPizza: async (req, res) => {
        try {
          const movie = await Movie.findById(req.params.id).populate("commment")
          res.status(200).json(this.addPizza);
        } catch (error) {
          res.status(500).json(error);
        }
      },
};

module.exports = AddpizzaController