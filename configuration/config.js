const mongoose=require("mongoose")
require("dotenv").config()
const connectdb=async()=>{
    try {
        mongoose.set('strictQuery', false)
      await mongoose.connect("mongodb+srv://mohamed:"+process.env.pass_database+"@cluster0.ugvs97m.mongodb.net/?retryWrites=true&w=majority")
      console.log("db is connected")  
    } catch (error) {
        console.log(error)
    }
}
module.exports=connectdb