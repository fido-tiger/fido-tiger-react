'use strict';
module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable('clients', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},

			name: {
				type: Sequelize.STRING
			},

			lname: {
				type: Sequelize.STRING
			},

			address: {
				type: Sequelize.STRING		
			},

			city: {
				type: Sequelize.STRING	
			},

			state: {
				type: Sequelize.STRING
			},

			zip : {
				type: Sequelize.STRING
			},

			phone: {
				type: Sequelize.STRING
			},

			email: {
				type: Sequelize.STRING
			}
		});
	},
	down: function(queryInterface,Sequelize) {
		return queryInterface.dropTable('clients');
	}
};