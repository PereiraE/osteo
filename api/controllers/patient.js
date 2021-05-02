const { Patient } = require('../sequelize');

const findAllPatients = (req, res, next) => {
    Patient.findAll().then(patients => res.json(patients));
}

module.exports = {
    findAllPatients,
}