import User from '../models/users.js';
import bcrypt from 'bcrypt';

async function register(req, res, next) {
	const { name, email, password } = req.body;

	const emailInLowerCase = email.toLowerCase();

	try {
		const user = await User.findOne({ email: emailInLowerCase });

		if (user !== null) {
			return res.status(409).send({ message: 'User already registered' });
		}

		const passwordHash = await bcrypt.hash(password, 10);

		await User.create({
			name,
			email: emailInLowerCase,
			password: passwordHash,
		});

		res.status(201).send({ message: 'Registration successfully' });
	} catch (error) {
		next(error);
	}
}

async function login(req, res, next) {
	res.send('Login');
}

export default {
	register,
	login,
};
