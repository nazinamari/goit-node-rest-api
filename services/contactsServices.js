import * as fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const contactsPath = path.resolve('db', 'contacts.json');

async function listContacts() {
	const contacts = await fs.readFile(contactsPath, { encoding: 'utf-8' });
	return JSON.parse(contacts);
}

function writeContacts(contacts) {
	return fs.writeFile(contactsPath, JSON.stringify(contacts, undefined, 2));
}

async function getContactById(contactId) {
	const contacts = await listContacts();

	const contact = contacts.find((contact) => contact.id === contactId);

	if (typeof contact === 'undefind') {
		return null;
	}

	return contact;
}

async function removeContact(contactId) {
	const contacts = await listContacts();

	const contactInd = contacts.findIndex((contact) => contact.id === contactId);

	if (contactInd === -1) {
		return null;
	}

	const removedContact = contacts[contactInd];

	contacts.splice(contactInd, 1);

	await writeContacts(contacts);

	return removedContact;
}

async function addContact(name, email, phone) {
	const contacts = await listContacts();

	const newContact = {
		id: crypto.randomUUID(),
		name,
		email,
		phone,
	};
	contacts.push(newContact);

	await writeContacts(contacts);

	return newContact;
}

export { listContacts, getContactById, removeContact, addContact };
