import mongoose from "mongoose";
// import {User} from "../modals/C"
const userSchema = new mongoose.Schema({
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
})

export const User = mongoose.models.User || mongoose.model('User', userSchema);