const sql = require('../../../db/models');

module.exports = {
	getAllUsers: async () => {
		const result = await sql.user.findAll({
			include: [
				{
					model   : sql.userDocuments,
					include : [
						{
							model: sql.typeDocuments
						}
					]

				},
				{
					model   : sql.contactInfos,
					include : [
						{
							model: sql.countries
						}
					]
				}
			]
		});
		return result;
	},

	getOneUser: async (parameters) => {
		const result = await sql.user.findOne({ 
			include: [
				{
					model   : sql.userDocuments,
					include : [
						{
							model: sql.typeDocuments
						}
					]

				},
				{
					model   : sql.contactInfos,
					include : [
						{
							model: sql.countries
						}
					]
				}
			],
			where: { ...parameters } });
		return result;
	},

	getUserById: async (id) => {
		const result = await sql.user.findOne({ 
			include: [
				{
					model   : sql.userDocuments,
					include : [
						{
							model: sql.typeDocuments
						}
					]

				},
				{
					model   : sql.contactInfos,
					include : [
						{
							model: sql.countries
						}
					]
				}
			],
			where: { ...id } });
		return result;
	},

	createUser: async (userInformation, transaction) => {
		const result = await sql.user.create({ ...userInformation }, { transaction });
		return result;
	},

	updateUser: async (id, userInformation) => {
		const result = await sql.user.update({ ...userInformation }, {
			where: { ...id }
		});
		return result;
	},

	deleteUser: async (id) => {
		const result = await sql.user.destroy({
			where: { ...id }
		})
		return result;
	}
}