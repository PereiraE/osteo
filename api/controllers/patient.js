const { Patient } = require('../sequelize');

const findAllPatients = (req, res, next) => {
    Patient.findAll().then(patients => res.json(patients));
}

const findOnePatient = (req, res, next) => {
    Patient.findByPk(req.params.id).then(patient => res.json(patient));
}

const createPatient = (req, res, next) => {
    Patient.create(req.body).then(patient => res.json(patient));
}

const deletePatient = (req, res, next) => {
    Patient.delete({
        where: {
            id: req.params.id
        }
    }).then(res.json({message : "Patient supprimé avec succès"}));
}

module.exports = {
    findAllPatients,
    findOnePatient,
    createPatient,
    deletePatient,
}