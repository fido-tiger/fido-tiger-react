module.exports = function(sequelize, DataTypes) {
    var ClientInfo = sequelize.define("ClientInfo", {
        uuid: {
            type: DataTypes.INTEGER,
            // defaultValue: DataTypes.UUIDV1,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
            notNull: true,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            notNull: true,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            notNull: true,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            notNull: true,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            notNull: true,
            allowNull: false
        },
        zip_code: {
            type: DataTypes.INTEGER,
            notNull: true,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            notNull: true,
            allowNull: false
        },
        parent_user: {
            type: DataTypes.STRING,
/*            notNull: true,
            allowNull: false*/
        },
        status: {type: DataTypes.ENUM('active','inactive'),defaultValue:'active' }
    });
    return ClientInfo;
};