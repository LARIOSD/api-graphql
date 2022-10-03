const contactInfoModal = require('./contact-info.ops')

module.exports = {
  getAllContactInfo: async () => {
    const response = await contactInfoModal.getAllContactInfo();
    return response
  },

  createContactInfo: async () => {
    const response = await contactInfoModal.createUsers();
    return response;
  },
}