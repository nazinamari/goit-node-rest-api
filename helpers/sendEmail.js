import 'dotenv/config';
import sgMail from '@sendgrid/mail';

console.log(process.env.SENDGRID_API_KEY);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const message = {
	to: 'nzyame@gmail.com',
	from: 'nazinaphoto@gmail.com',
	subject: 'Hello from Node.js',
	html: `<h1 style='color: red'>Node.js is awesome!</h1>`,
	text: `Node.js is awesome platform!`,
};

sgMail.send(message).then(console.log).catch(console.error);
