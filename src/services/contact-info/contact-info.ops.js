const sql = require('../../../db/models')

module.exports = {
  getAllContactInfo: async() => {
    const result = await sql.contactInfo.findAll();
    return result
  },

  createContactInfo: async(contactInfoData) => {
    const result = await sql.contactInfo.create({
     ...contactInfoData
    });

    return result
  }
}