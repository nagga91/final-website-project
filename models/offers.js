const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  description: String,
  title: String,
  jobtype:String,
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  skills:String,
  hours:String,
  place:String,
  salary:String,
  withtest:String,
  test:[{question:String,time:Number}],
  candidates:[{candidat:String,answers:[]}]
},{ timestamps:true});
module.exports = mongoose.model("offers", offerSchema);