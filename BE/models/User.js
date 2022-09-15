const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minilength: 6,
        maxlength: 20,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        minilength: 10,
        maxlength: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minilength: 6,
    },
    admin: {
        type: Boolean,
        default: false,
    },

},
    { timestamps: true }
);
const cartpizza = new mongoose.Schema({
    idpizza: {
        type: String,
        required: true,
    },
    namepizza: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    AccountUSer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
},
);
const addpizza= new mongoose.Schema({
namepizza:{
    type:String,
    required:true,
    unique:true,
},
price:{
    type:Number,
    required:true,
},
// commment: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comments" }],
},);
const comment= new mongoose.Schema({
nameUser:{
    type:String,
    required:true,
},
content:{
    type:String,
    required:true,
},
idPizza:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Pizza",
}
},);
// let User = mongoose.model("User", userSchema);
// let Cart = mongoose.model("cart", cartpizza);
// let Commnent = mongoose.model("Comment",comment);
// let Addpizza = mongoose.model("Pizza",addpizza);
module.exports = mongoose.model("User", userSchema);
// module.exports = mongoose.model("Cart", cartpizza);
// module.exports = mongoose.model("Comment", comment);
// module.exports = mongoose.model("Pizza", addpizza);

// module.exports = {
//     User,
//     // Cart,
// };