module.exports = function(sequelize, DataTypes) {
    var Client = sequelize.define("Client", {
        uuid: {
            type: DataTypes.INTEGER,
            // defaultValue: DataTypes.UUIDV1,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            notNull: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            notNull: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            notNull: true,
            allowNull: false
        },
        status: {type: DataTypes.ENUM('active','inactive'),defaultValue:'active' }
    });
    return Client;
};