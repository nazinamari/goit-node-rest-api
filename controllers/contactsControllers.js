import HttpError from '../helpers/HttpError.js';
import {
	listContacts,
	getContactById,
	removeContact,
	addContact,
} from '../services/contactsServices.js';

export const getAllContacts = async (req, res, next) => {
	try {
		const contacts = await listContacts();
		res.json(contacts);
	} catch (error) {
		next(HttpError(500));
	}
};
export const getOneContact = async (req, res, next) => {
	try {
		const { id } = req.params;
		const contact = await getContactById(id);
		if (!contact) {
			throw HttpError(404);
		}
		res.json(contact);
	} catch (error) {
		next(HttpError(500));
	}
};

export const deleteContact = (req, res) => {};

export const createContact = (req, res) => {};

export const updateContact = (req, res) => {};
