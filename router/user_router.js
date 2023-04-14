const express = require("express")
const {Register, Login, updateusers, getmanyuser } = require("../controller/usercontrol")
const { isAuth } = require("../middlewar/isAuth")
const { registervalidation, validation, loginvalidation } = require("../middlewar/validation")
const userRooter = express.Router()

userRooter.post("/register",registervalidation,validation,Register)
userRooter.post("/login",loginvalidation,validation,Login)
userRooter.put('/update/:id',updateusers)
userRooter.post('/manyusers',getmanyuser)
userRooter.get('/get',isAuth,(req,res)=>{
   res.send({user:req.user}) ; 
})
module.exports=userRooter