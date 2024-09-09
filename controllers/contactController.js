const asyncHandler = require("express-async-handler")
const Contact =require("../models/contactModel");


//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = async (req, res) => {
    try {
    const contacts = await Contact.find()
    res.status(200).json(contacts);
    } catch (error) {
    res.status(500).json({message: error.message});
    }
};

//@desc Create new contact
//@route Post /api/contacts
//@access Public
const createContact = async(req, res) => {
    console.log("The request body is:", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("Please add all fields");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json(contact);
};

//@desc Get contact
//@route Get /api/contacts/:id
//@access Public

const getContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
    res.status(404);
    throw new Error("Contact not found");
}
    res.status(200).json(contact);
});

//@desc Update contact
//@route Post /api/contacts/:id
//@access Public

const updateContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
    res.status(404);
    throw new Error("Contact not found");
}
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );

    res.status(200).json(updatedContact);
});

//@desc Delete contact
//@route Post /api/contacts/:id
//@access Public

const deleteContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
    res.status(404);
    throw new Error("Contact not found");
}
    await Contact.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: `Contact with id ${req.params.id} deleted`});
});


module.exports = {
    getContacts, 
    createContact, 
    getContact, 
    updateContact,
    deleteContact };
