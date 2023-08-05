import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phoneNumber : {
        type : String,
        required : true,
        unique : true
    },
    password:{
        type:String,
        required:true,
    },
    role : {
        type:String,
        default : "user",
        required : true
    }
}, {
    timestamps:true
})

export default mongoose.model("User", UserSchema)