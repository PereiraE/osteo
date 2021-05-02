const express = require('express');

const patientController = require('../controllers/patient');

const router = express.Router();

router.get('/:id', patientController.findOnePatient);
router.use('/', patientController.findAllPatients);

module.exports = router;