const Messages = require("../models/messages");


exports.getAll = async (req, res, next) => {
  try {
    const msgs = await Messages.findAll()
    return res.status(200).json({ status: "Ok", msgs });
  } catch (err) {
    return res.status(500).json({ status: "Error", err });
  }
};

exports.createOne = async (req, res, next) => {
  try {
    const newMsg = await Messages.create(req.body.message);
    return res.status(200).json({ status: "Message added", newMsg });
  } catch (err) {
    return res.status(500).json({ status: "Error", err });
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const msg = await Messages.destroy({ where: { id: req.params.id } });
    return res.status(200).json({ status: "ok", msg });
  } catch (err) {
    return res.status(500).json({ status: "Error", err });
  }
};