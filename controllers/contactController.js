//@desc Get all contacts
//@route GET /api/contacts
//@access Public
function getContacts(req, res) {
    res.status(200).json({ message: "Get all contacts" });
}

//@desc Create new contact
//@route Post /api/contacts
//@access Public
const createContact = (req, res) => {
    console.log("The request body is:", req.body);
    res.status(201).json({ message: "Create Contact"});
};

//@desc Get contact
//@route Get /api/contacts/:id
//@access Public
const getContact = (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}`});
};

//@desc Update contact
//@route Post /api/contacts/:id

//@access Public
const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}`});
};

//@desc Delete contact
//@route Post /api/contacts/:id
//@access Public
const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}`});
};




module.exports = {
    getContacts, 
    createContact, 
    getContact, 
    updateContact,
    deleteContact };
