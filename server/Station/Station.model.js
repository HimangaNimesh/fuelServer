import mongoose from "mongoose";

const StationSchema = mongoose.Schema({
    stationName : {
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
    regNumber : {
        type : String,
        required : true,
        unique : true
    },
    district : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    }
}, {
    timestamps:true
})

export default mongoose.model("Station", StationSchema)