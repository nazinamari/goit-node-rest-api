import 'dotenv/config';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendMail(message) {
	try {
		await sgMail.send(message);
		console.log('Email sent successfully');
	} catch (error) {
		console.error('Error sending email:', error);
		throw error;
	}
}

export default { sendMail };

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const message = {
// 	to: 'nzyame@gmail.com',
// 	from: 'nzyame@gmail.com',
// 	subject: 'Hello from Node.js',
// 	html: `<h1 style="color: red">Node.js is awesome platform!</h1>`,
// 	text: `Node.js is awesome platform!`,
// };

// sgMail.send(message).then(console.log).catch(console.error);
