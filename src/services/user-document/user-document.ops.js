const sql = require('../../../db/models');

module.exports = {
  getAllUserDocument: async () => {
    const result = await sql.userDocument.findAll();
    return result
  },

  createUserDocument: async (userDocumentData) => {
    const result = await sql.userDocument.create({
      ...userDocumentData
    });

    return result
  }
}