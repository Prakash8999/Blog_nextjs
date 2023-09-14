import mongoose from 'mongoose'

export const connectDb =async () =>{
try {
	await mongoose.connect(process.env.MONGO_URI,{
		dbName:'NextJSBlog'
	}).then(()=>{
		console.log("Db Connected");
	})
} catch (error) {
	console.log(error);
}


}