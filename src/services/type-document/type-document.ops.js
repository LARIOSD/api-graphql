const sql = require('../../../db/models');

module.exports = {
  getAllTypeDocument: async () => {
    const result = await sql.typeDocument.findAll();
    return result;
  },

  createTypeDocument: async (typeDocumentData) => {
    const result = await sql.typeDocument.create({ ...typeDocumentData });
    return result;
  },
}