const sql = require('../../../db/models');

module.exports = {
  getAllUserDocument: async () => {
    const result = await sql.userDocuments.findAll();
    return result
  },

  createUserDocument: async (userDocumentData, transaction) => {
    const result = await sql.userDocuments.create({
      ...userDocumentData
    }, {transaction});

    return result
  }
}