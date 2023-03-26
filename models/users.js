const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    role:String,
    email:String,
    password:String,
    phone:String,
    name:String,
    lastname:String,
    image:String,
    adresse:String,
    job:String,
    experience:String,
    education:String,
    skills:String,
    languages:String,
    certifications:String,
    interests:String,
    about:String,
    description:String,
    services:String,
    products:String,
    facebook:String,
    linkedin:String,
    instagram:String,
    twitter:String
})

module.exports=mongoose.model("user",userSchema)