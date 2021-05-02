const { Patient } = require('../sequelize');

const findAllPatients = (req, res, next) => {
    Patient.findAll()
        .then(patients => res.status(200).json(patients))
        .catch(error => res.status(400).json({ error }));
}

const findOnePatient = (req, res, next) => {
    Patient.findByPk(req.params.id)
        .then(patient => res.status(200).json(patient))
        .catch(error => res.status(400).json({ error }));
}

const createPatient = (req, res, next) => {
    Patient.create(req.body)
        .then(patient => res.status(201).json(patient))
        .catch(error => res.status(400).json({ error }));
}

const deletePatient = (req, res, next) => {
    Patient.delete({
        where: {
            id: req.params.id
        }
    })
    .then(res.status(200).json({message : "Patient supprimé avec succès"}))
    .catch(error => res.status(400).json({ error }));
}

const updatePatient = (req, res, next) => {
    Patient.update(req.body, {
        where : {
            id: req.params.id
        }
    })
    .then((patients => res.status(200).json(patients[0])))
    .catch(error => res.status(400).json({ error }));
}

module.exports = {
    findAllPatients,
    findOnePatient,
    createPatient,
    deletePatient,
    updatePatient,
}