const sql = require('../../../db/models')

module.exports = {
  getAllContactInfo: async() => {
    const result = await sql.contactInfo.findAll();
    return result
  },

  createContactInfo: async() => {
    const result = await sql.contactInfo.create({
      userId         : 1,
      address        : '193256454',
      countryId      : 1,
      city           : 'soledad',
      phone          : '13132131',
      celPhone       : '4564654',
      emergencyName  : 'sdjkhsdk',
      emergencyPhone : '54545'
    });

    return result

  }
}