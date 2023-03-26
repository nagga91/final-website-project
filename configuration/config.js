const mongoose=require("mongoose")

const connectdb=async()=>{
    try {
        mongoose.set('strictQuery', false)
      await mongoose.connect("mongodb+srv://mohamed:SxiKtxoLupHA15Vd@cluster0.ugvs97m.mongodb.net/?retryWrites=true&w=majority")
      console.log("db is connected")  
    } catch (error) {
        console.log(error)
    }
}
module.exports=connectdb