const express = require('express');

const patientController = require('../controllers/patient');

const router = express.Router();

router.post('/', patientController.createPatient);
router.get('/:id', patientController.findOnePatient);
router.get('/lastName/:lastName', patientController.findByName);
router.put('/:id', patientController.updatePatient);
router.delete('/:id', patientController.deletePatient);
router.get('/', patientController.findAllPatients);

module.exports = router;