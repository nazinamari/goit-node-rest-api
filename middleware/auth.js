function auth(req, res, next) {
	const authorisationHeader = req.headers.authorisation;
	console.log(authorisationHeader);
	next();
}

export default auth;
