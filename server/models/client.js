var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
    const Client = sequelize.define("Client", {
        uuid: {
            type: DataTypes.INTEGER,
            //defaultValue: DataTypes.UUIDV1,
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

    }, {
        hooks: {
            beforeValidate: generateHash = function(data) {
                bcrypt.hashSync(data.get('password'), bcrypt.genSaltSync(8), null);
            }
        }

    });
    Client.associate = function(models) {
        Client.belongsTo(models.Client);
    };
    Client.prototype.comparePassword = function(password, callback) {
        bcrypt.compare(password, this.password, callback);
    };
    // Client.prototype.generateHash = function(data) {
    //     bcrypt.hashSync(data.get('password'), bcrypt.genSaltSync(8), null);
    // };

    return Client;
};