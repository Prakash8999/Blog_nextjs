import mongoose from "mongoose";

const postSchema = new mongoose.Schema({

	title: {
		type: String,
		unique: true,
		required: true
	},

	desc: {
		type: String,
		unique: true,
		required: true
	},
	image: {
		type: String,
		default: ''
	},
	content: {
		type: String,
		required: true
	},
	username: {

		type: String,
		required: true

	},

	


}, {
	timestamps: true
})

//  const Post = mongoose.model("post", postSchema)
const Post = mongoose.models.Post || mongoose.model('Post', postSchema)
//  export default mongoose.model('Post', postSchema)
export default Post;