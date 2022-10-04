const countryModal = require('./country.ops')

module.exports = {
  getAllCountry: async () => {
    const response = await countryModal.getAllCountry();
    return response
  },

  createCountry: async (countryData) => {
    const response = await countryModal.createCountry(countryData);
    return response;
  },
}