const Sequelize = require('sequelize');
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

/*List.hasMany(Task, {
    foreignKey: 'listID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
}); */


module.exports = {
    Patient,
    sequelize
}