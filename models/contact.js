import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Set name for a contact'],
		},
		email: {
			type: String,
		},
		phone: {
			type: String,
			required: [true, 'Set phone for a contact'],
		},
		favorite: {
			type: Boolean,
			default: false,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'user',
		},
	},
	{ versionKey: false, timestamps: true }
);

export default mongoose.model('Contact', contactSchema);
