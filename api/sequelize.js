const Sequelize = require('sequelize');
const ConsultationModel = require('./models/consultation');
const PatientModel = require('./models/patient');

const sequelize = new Sequelize('osteo', 'osteo', 'osteo', {
    host: 'estebanpereira.fr',
    dialect: 'mariadb',
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    }
  });

const Patient = PatientModel(sequelize, Sequelize);
const Consultation = ConsultationModel(sequelize, Sequelize);

Patient.hasMany(Consultation, {
    foreignKey: 'patientID'
});

module.exports = {
    Patient,
    sequelize
}