const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  description: String,
  title: String,
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  skills:String,
  hours:String,
  place:String,
});
module.exports = mongoose.model("offers", offerSchema);