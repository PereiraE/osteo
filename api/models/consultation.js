module.exports = (sequelize, type) => {
    return sequelize.define('Consultation' , {
        id:  {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        reason: {
            type: type.STRING,
            allowNull: false
        },
        functionalSign: {
            type: type.STRING,
            allowNull: false
        },
        orthoTest: {
            type: type.STRING,
        },
        treatment: {
            type: type.STRING,
            allowNull: false
        }
    })
}