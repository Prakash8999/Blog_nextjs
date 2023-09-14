import { connectDb } from "@/utils/db";
import { NextResponse } from "next/server";
import Post  from "@/models/postModel";
export const GET = async (request, response) => {
	const url = new URL(request.url)
	const username = url.searchParams.get("username")

	try {
		await connectDb()
		const post =await Post.find()
		// return NextResponse(JSON.stringify(post), {status: 200})
		return NextResponse.json(post, { status: 200 })
	} catch (error) {
	


		return new NextResponse.json({ message: error.message + "error" }, { status: 500 })
	}
}


export const POST = async (request, response) => {
	const { title, desc, image,content, username } = await request.json()

	try {
		await connectDb()
		const post =await Post.create({title,desc,image,content,username})
		// return NextResponse(JSON.stringify(post), {status: 201})
		return NextResponse.json({ message: "Post Created Successfully" , post}, { status: 201 })
	} catch (error) {
	


		return new NextResponse.json({ message: error.message + "error" }, { status: 500 })
	}
}


