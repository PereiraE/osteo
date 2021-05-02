module.exports = (sequelize, type) => {
    return sequelize.define('FunctionalCategory' , {
        id:  {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        label: {
            type: type.STRING,
            allowNull: false
        }
    })
}