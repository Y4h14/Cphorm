const express = require('express');
const reportRouter = express.Router();
const reportController = require('../controllers/report_controllers')

reportRouter.post('/', reportController.createReport);
reportRouter.get('/', reportController.getAllReport);
reportRouter.get('/:id', reportController.getReport);
reportRouter.delete('/:id', reportController.deleteReport);
reportRouter.put('/:id', reportController.updateReport);



module.exports = reportRouter;