var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
    const Client = sequelize.define("Client", {
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
        status: { type: DataTypes.ENUM('active', 'inactive'), defaultValue: 'active' }

    });
    Client.associate = function(models) {
        Client.belongsTo(models.Client);
    };
    Client.prototype.comparePassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };



    return Client;
};