import { connectDb } from "@/utils/db";
import { NextResponse } from "next/server";
import Post  from "@/models/postModel";

export const DELETE = async (request, {params})=>{
	const {id} = params;
try {
await connectDb()
await Post.findByIdAndDelete(id)
return new NextResponse("Post deleted Successfully", {status: 200})
} catch (error) {
return new NextResponse.json({message : error.message}, {status: 500})
	
}

}