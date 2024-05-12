import HttpError from '../helpers/HttpError.js';
import {
	listContacts,
	getContactById,
	removeContact,
	addContact,
	updateById,
} from '../services/contactsServices.js';

export const getAllContacts = async (req, res, next) => {
	try {
		const contacts = await listContacts();
		res.json(contacts);
	} catch (error) {
		next(error);
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
		next(error);
	}
};

export const deleteContact = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await removeContact(id);
		if (!result) {
			throw HttpError(404);
		}
		res.json(result);
	} catch (error) {
		next(error);
	}
};

export const createContact = async (req, res, next) => {
	try {
		const { name, email, phone } = req.body;
		const newContact = await addContact(name, email, phone);
		res.status(201).json(newContact);
	} catch (error) {
		next(error);
	}
};
export const updateContact = async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await updateById(id, req.body);
		if (!result) {
			throw HttpError(404);
		}
		res.json(result);
	} catch (error) {
		next(error);
	}
};
