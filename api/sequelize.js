const Sequelize = require('sequelize');

const ConsultationModel = require('./models/consultation');
const PatientModel = require('./models/patient');
const CategoryModel = require('./models/category');
const AntecedentModel = require('./models/antecedent');
const FunctionalSignModel = require('./models/functionalSign');

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
const FunctionalSign = FunctionalSignModel(sequelize, Sequelize);
const FunctionalSignCategory = CategoryModel(sequelize, Sequelize, 'FunctionalSignCategory');

Patient.hasMany(Consultation, {
    foreignKey: 'patientID'
});

Patient.hasMany(Antecedent, {
    foreignKey: 'patientID'
});

Antecedent.belongsTo(AntecedentCategory, {
    foreignKey: 'antecedentCategoryID'
});

Consultation.hasMany(FunctionalSign, {
    foreignKey: 'consultationID'
});

FunctionalSign.belongsTo(FunctionalSignCategory, {
    foreignKey: 'functionalSignCategoryID'
})

module.exports = {
    Patient,
    Consultation,
    AntecedentCategory,
    FunctionalSign,
    FunctionalSignCategory,
    sequelize,
}