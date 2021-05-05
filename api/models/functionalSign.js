module.exports = (sequelize, type, name) => {
    return sequelize.define('FunctionalSign' , {
        id:  {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: type.STRING,
            allowNull: false
        }
    });
}