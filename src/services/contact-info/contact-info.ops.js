const sql = require('../../../db/models')

module.exports = {
  getAllContactInfo: async() => {
    const result = await sql.contactInfos.findAll();
    return result
  },

  createContactInfo: async(contactInfoData,transaction) => {
    const result = await sql.contactInfos.create({
     ...contactInfoData
    },{transaction});

    return result
  }
}