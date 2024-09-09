const mongoose = require("mongoose");

const contactSchema =  mongoose.Schema({
    name:{
        type: String,
        required: [true, "please add a contact name"]
    },
    email:{
        type: String,
        required: [true, "please add an email"]
    },
    phone:{
        type: String,
        required: [true, "please add a phone number"]
    },
},{
    timestamps: true
});

module.exports = mongoose.model("Contact", contactSchema);