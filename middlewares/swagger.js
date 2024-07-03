import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import createHttpError from 'http-errors';

export const swagger = () => {
	try {
		const swaggerDocument = fs.readFileSync(
			path.join(process.cwd(), 'docs', 'swagger.json')
		);
		return [swaggerUi.serve, swaggerUi.setup(swaggerDocument)];
	} catch (error) {
		return (req, res, next) =>
			next(createHttpError(500, "Can't load swagger docs"));
	}
};
