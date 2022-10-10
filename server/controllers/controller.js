const messages = require('../data/data')


exports.getAll = async (req, res, next) => {
  try {
    const msgs = messages
    return res.status(200).json({ status: 'Ok', msgs})
  } catch (err) {
    return res.status(500).json({status: 'Error', err})
  }
}

exports.createOne = async (req, res, next) => {
  try {
    const newMsg = req.body.message
    messages.push(newMsg)
    return res.status(200).json({ status: "Message added", newMsg });
  } catch (err) {
    return res.status(500).json({ status: "Error", err });
  }
}