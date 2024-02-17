import mongoose, { model,Schema, models, mongo } from "mongoose";

const contactSchema = new Schema({
  name : {
    required : true,
    type : String,
  },
  email : {
    required : true,
    type : String,
    
  },
  message : {
    type : String,
    required : true
  }
},{timestamps : true})

// export const Contact = mongoose.model("Contact",contactSchema)
export  const Contact = models.Contact || model("Contact", contactSchema)