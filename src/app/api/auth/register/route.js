import  User  from "@/models/userModel";
import { connectDb } from "@/utils/db";
import bcrypt from 'bcrypt'
import { NextResponse,NextRequest } from "next/server";
export const POST = async (request) =>{

	
	const { name, email,password } = await request.json()

	await connectDb()	
	const hashedPassword = await bcrypt.hash(password,10)
	try {
	
		let user = await User.findOne( {email })
		
		if (user) 	{
		           
			return NextResponse.json({ message: "Email  already exist" }, { status: 500 })
		}

	user=await User.create({ email, name, password:hashedPassword})
		return NextResponse.json({ message: "User Created Successfully" }, { status: 201 })
		
	} catch (error) {
		return  NextResponse.json({ message: error.message }, { status: 500 })
	}





}