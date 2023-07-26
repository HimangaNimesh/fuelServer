import mongoose from "mongoose";

const UserShema = mongoose.Schema({
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
    }
})

export default mongoose.model("User", UserShema)