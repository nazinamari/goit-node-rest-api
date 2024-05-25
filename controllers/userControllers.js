import * as fs from 'node:fs/promises';
import path from 'node:path';
import HttpError from '../helpers/HttpError.js';

import User from '../models/users.js';

export const uploadAvatar = async (req, res, next) => {
	try {
		await fs.rename(
			req.file.path,
			path.resolve('public/avatars', req.file.filename)
		);

		const newUser = await User.findByIdAndUpdate(
			req.user.id,
			{ avatar: req.file.filename },
			{ new: true }
		);

		if (newUser === null) {
			throw HttpError(404, 'User not found');
		}

		res.send(newUser);
	} catch (error) {
		next(error);
	}
};
