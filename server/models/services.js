module.exports = function(sequelize, DataTypes) {
    var Services = sequelize.define("Services", {
    	begin_date: {
    		type: DataTypes.STRING
    	},
    	end_date: {
    		type:DataTypes.STRING
    	},
        pet_name: {
            type:DataTypes.STRING
        },
        temperament: {
            type: DataTypes.STRING
        },
        medications: {
            type: DataTypes.STRING
        },
    	event_note: {
    		type: DataTypes.STRING
    	},
    	options: {
    		type: DataTypes.STRING,
    		validate: {
    		notNull: true,
    		msg:"Must choose an option"
    		}
    	}
    });
    return Services
};
    