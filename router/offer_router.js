const express = require("express")
const { addoffer, myoffers, getoneoffer, getoffers, deleteoffer, updateoffer } = require("../controller/offercontrol")
const { isAuth } = require("../middlewar/isAuth")
const offerRooter = express.Router()

offerRooter.post("/addoffer",isAuth,addoffer)
offerRooter.get("/myoffers",isAuth,myoffers)
offerRooter.get("/oneoffer/:id",getoneoffer)
offerRooter.get("/alloffers",getoffers)
offerRooter.delete("/deleteoffer/:id",deleteoffer)
offerRooter.put("/updateoffer/:id",updateoffer)


module.exports=offerRooter;