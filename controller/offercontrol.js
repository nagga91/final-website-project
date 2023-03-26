const offers=require('../models/offers')

exports.addoffer = async (req, res) => {
    try {
      const newoffer = new offers({ ...req.body, userID: req.user.id });
      await newoffer.save();
      res.status(200).send({ msg: "offer added", newoffer });
    } catch (error) {
      res.status(500).send({ msg: "could not add offer" });
    }
};
exports.myoffers = async (req, res) => {
    try {
      const myoffers = await offers.find({ userID: req.user.id });
      res.status(200).send({ msg: "your offers", myoffers });
    } catch (error) {
      res.status(500).send({ msg: "couldn't get your offers" });
    }
  };
  exports.getoneoffer = async (req, res) => {
    try {
      const oneoffer = await offers.findById(req.params.id);
      res.status(200).send({ msg: "one offer", oneoffer });
    } catch (error) {
      res.status(500).send({ msg: "couldn't get one offer" });
    }
  };
  exports.updateoffer = async (req, res) => {
    try {
      const updateoffer = await offers.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).send({ msg: "offer updated", updateoffer });
    } catch (error) {
      res.status(500).send({ msg: "could not update offer" });
    }
  };
  exports.deleteoffer = async (req, res) => {
    try {
      const deleteoffer = await offers.findByIdAndDelete(req.params.id);
      res.status(200).send({ msg: "offer deleted" });
    } catch (error) {
      res.status(500).send({ msg: "cannot delete offer" });
    }
  };
  exports.getoffers = async (req, res) => {
    try {
      const alloffer = await offers.find().populate("userID");
      res.status(200).send({ msg: "all offers", alloffer });
    } catch (error) {
      res.status(500).send({ msg: "could not get all offers" });
    }
  };