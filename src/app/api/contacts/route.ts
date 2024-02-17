import mongoose from "mongoose";
import { Contact } from "../../../../modals/ContactModel";

export  async function POST(req:Request) {
  console.log("hello===========")
  const body = await req.json();
  mongoose.connect(`${process.env.MONGO_URL}`)
  await Contact.create(body)
  return new Response(JSON.stringify(body));
}


export  async function GET() {
  mongoose.connect(`${process.env.MONGO_URL}`)
  const dbData = await Contact.find()
  if(dbData){
    return new Response(JSON.stringify(dbData));
  } else {
    return new Response(JSON.stringify("No data in the database."))
  }
}

export  async function PUT() {
  mongoose.connect(`${process.env.MONGO_URL}`)
  const dbData = await Contact.findById()
  if(dbData){
    return new Response(JSON.stringify(dbData));
  } else {
    return new Response(JSON.stringify("No data in the database."))
  }
}



