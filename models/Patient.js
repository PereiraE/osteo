module.exports = (sequelize, type) => {
    return sequelize.define('Patient' , {
        id:  {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        lastName: {
            type: type.STRING,
            allowNull: false
        },
        firstName: {
            type: type.STRING,
            allowNull: false
        },
        gender: {
            type: type.BOOLEAN,
            allowNull: false,
        },
        birthDate: {
            type: type.DATEONLY,
            allowNull: false,
        },
        adress: {
            type: type.STRING,
            allowNull: false,
        },
        telephone: {
            type: type.STRING,
            allowNull: false,
        },
        mail: {
            type: type.STRING,
            allowNull: false,
        },
        profession: {
            type: type.STRING,
            allowNull: false,
        },
        activity: {
            type: type.STRING,
            allowNull: false,
        }
    })

}