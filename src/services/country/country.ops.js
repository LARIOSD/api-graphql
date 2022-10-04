const sql = require('../../../db/models')

module.exports = {
  getAllCountry: async () => {
    const result = await sql.country.findAll();
    return result
  },

  createCountry: async(countryData) => {
    const result = await sql.country.create({
     ...countryData
    });

    return result
  }
}