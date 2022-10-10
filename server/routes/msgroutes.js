const controller = require('../controllers/dbcontroller')
const router = require('express').Router()
const { validateMessageBody } = require('../services/validation/validation.js');

router
  .get('/', controller.getAll)
  .post('/', validateMessageBody, controller.createOne)
  .delete('/:id', controller.deleteOne)


module.exports = router
