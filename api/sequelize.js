const Sequelize = require('sequelize');
const ConsultationModel = require('./models/consultation');
const PatientModel = require('./models/patient');
const CategoryModel = require('./models/category');
const AntecedentModel = require('./models/antecedent');

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
const Antecedent = AntecedentModel(sequelize, Sequelize);
const AntecedentCategory = CategoryModel(sequelize, Sequelize, 'AntecedentCategory');

Patient.hasMany(Consultation, {
    foreignKey: 'patientID'
});

Patient.hasMany(Antecedent, {
    foreignKey: 'patientID'
});

Antecedent.belongsTo(AntecedentCategory, {
    foreignKey: 'antecedentCategoryID'
});

module.exports = {
    Patient,
    Consultation,
    AntecedentCategory,
    sequelize,
}