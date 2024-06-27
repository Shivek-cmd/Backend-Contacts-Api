//@desc get all contacts
//@route GET /api/contacts
//@acces public
const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Create new Contact
//@route POST /api/contacts
//@acces public
const createContact = (req, res) => {
  res.status(201).json({ message: "Create Contact" });
};
//@desc Get Contact
//@route GET /api/contacts/:id
//@acces public
const getContact = (req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}` });
};
//@desc Update Contact
//@route PUT /api/contacts/:id
//@acces public
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
};
//@desc Delete Contact
//@route DELETE /api/contacts/:id
//@acces public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
};
module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
