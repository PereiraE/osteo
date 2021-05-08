module.exports = (sequelize, type, name) => {
    return sequelize.define(name , {
        id:  {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        label: {
            type: type.STRING,
            allowNull: false
        }
    });
}