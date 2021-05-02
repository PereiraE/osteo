const { Patient } = require('../sequelize');

const findAllPatients = (req, res, next) => {
    Patient.findAll().then(patients => res.json(patients));
}

const findOnePatient = (req, res, next) => {
    Patient.findByPk(req.params.id).then(patient => res.json(patient));
}

module.exports = {
    findAllPatients,
    findOnePatient,
}