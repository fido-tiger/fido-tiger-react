
module.exports = function(sequelize, DataTypes) {
    var Contact = sequelize.define("Contact", {
    	first_name: {
    		type:DataTypes.STRING,
    		validate: {
    			notNull: true
    		}
    	},
        
    	last_name: {
    		type:DataTypes.STRING,
    		validate: {
    			notNull: true
    		}
    	},

    	email: {
    		type: DataTypes.STRING,
    		validate: {
    			isEmail: true,
    			notNull: true
    		}
    	},

    	phone: {
    		type: DataTypes.INTEGER(10)
    	},

    	street_address: {
    		type: DataTypes.STRING,
    		validate: {
    			isNumeric: true,
    			notNull: true,
    		}
    	},

    	city: {
    		type: DataTypes.STRING
    	},

    	state: {
    		type: DataTypes.STRING
    	},

    	zip_code: {
    		type: DataTypes.INTEGER(5),
            allowNull: false
    	}
    	
    });
    return Contact;
};