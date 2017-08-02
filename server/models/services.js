module.exports = function(sequelize, DataTypes) {
    var Services = sequelize.define("Services", {
        pet_name: {
            type: DataTypes.STRING
        },
        start_date: {
            type: DataTypes.STRING
        },
        start_time: {
            type: DataTypes.STRING
        },
        end_date: {
            type: DataTypes.STRING
        },
        end_time:{
            type: DataTypes.STRING
        },
        activity_value: {
            type: DataTypes.STRING
        },
        medications_value: {
            type: DataTypes.STRING
        },
        event_notes: {
            type: DataTypes.STRING
        },
        parent_client: {
            type: DataTypes.STRING
        },
        parent_employee: {
            type: DataTypes.STRING
        },
        job_accepted: {
            type: DataTypes.BOOLEAN,
            notNull: true,
            allowNull: false,
            defaultValue: false
        },  

    });
    return Services;
};

