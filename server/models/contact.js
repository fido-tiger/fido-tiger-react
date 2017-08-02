module.exports = function(sequelize, DataTypes) {
    var Contact = sequelize.define("Contact", {
        name: {
            type: DataTypes.STRING,

        },
        email: {
            type: DataTypes.STRING,

        },
        phone: {
            type: DataTypes.INTEGER(10)
        },
        message: {
            type: DataTypes.STRING,
        }
    });
    return Contact;
};