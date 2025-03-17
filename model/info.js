import mongoose from "mongoose";
const infoSchema = new mongoose.Schema({
    name:{type:String,required:true},
    phone:{type:String,required:true},
    address:{type:String,required:true}
})
const Info = mongoose.model('Info',infoSchema)
export default Info
