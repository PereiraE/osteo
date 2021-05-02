const express = require('express');

const patientController = require('../controllers/patient');

const router = express.Router();

router.post('/', patientController.createPatient);
router.get('/:id', patientController.findOnePatient);
router.put('/:id', patientController.updatePatient);
router.delete('//:id', patientController.deletePatient);
router.use('/', patientController.findAllPatients);

module.exports = router;