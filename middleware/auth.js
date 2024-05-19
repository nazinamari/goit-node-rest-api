function auth(req, res, next) {
	const authorizationHeader = req.headers.authorization;
	console.log({ authorizationHeader });

	if (typeof authorizationHeader === 'undefined') {
		return res.status(401).send({ message: 'Invalid token' });
	}
	next();
}

export default auth;
