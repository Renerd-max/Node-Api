const express = require('express');
const router = express.Router();
const employeesController = require('../../controllers/employeesController')

//Modal view controller. (MVC) is all about separating your controller logic from the main content.

router.route('/')
    .get(employeesController.getAllEmployees)
    .post(employeesController.createNewEmployee)
    .put(employeesController.updateEmployee)
    .delete(employeesController.deleteEmployee);

router.route('/:id')
    .get(employeesController.getEmployee);

module.exports = router;