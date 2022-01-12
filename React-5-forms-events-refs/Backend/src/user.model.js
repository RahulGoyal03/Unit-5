const {Schema, model} = require("mongoose")

const userSchema = new Schema({
    username : {type: String, required:false},
    age : {type: Number, required: false},
    address : {type: String, required: false},
    department : {type:String, required: false},
    salary: {type : Number, required : false},
    marital : {type : String, required : false},
    profile: {type: String, required: false},
    file: {type: String, required: false},

})

module.exports = model("user", userSchema)