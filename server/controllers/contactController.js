const database = require('../config/database');
const Contact = require('../models/Contact');
const { buildContactTemplate } = require('../utils/emailTemplates');

const submitContact = (req, res) => {
  const contact = new Contact(req.validatedBody);
  database.contacts.push(contact);
  res.status(201).json({ success: true, data: contact, email: buildContactTemplate(contact) });
};

module.exports = {
  submitContact
};
