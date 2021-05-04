const Sequelize = require('sequelize');
const ConsultationModel = require('./models/consultation');
const PatientModel = require('./models/patient');
const CategoryModel = require('./models/category');

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
const AntecedentCatagory = CategoryModel(sequelize, Sequelize, 'AntecedentCategory');

Patient.hasMany(Consultation, {
    foreignKey: 'patientID'
});

Patient.hasMany(AntecedentCatagory, {
    foreignKey: 'patientID'
})

module.exports = {
    Patient,
    Consultation,
    AntecedentCatagory,
    sequelize,
}