import multer from 'multer';
import path from 'node:path';
import crypto from 'node:crypto';

const storage = multer.diskStorage({
	destination(req, file, cb) {
		console.log(path.resolve('tmp'));
		cb(null, path.resolve('tmp'));
	},
	filename(req, file, cb) {
		console.log({ file });
		cb(null, file.originalname);
	},
});

export default multer({ storage });
