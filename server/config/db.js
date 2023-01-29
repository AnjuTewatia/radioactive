
const mongoose=require("mongoose")
module.exports=mongoose.connection=async()=>{
    return await mongoose.connection(process.env.mongourl)
}