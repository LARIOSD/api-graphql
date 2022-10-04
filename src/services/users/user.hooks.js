const userModel = require('./user.ops');
const { sequelize } = require('../../../db/models');
const contactModel = require('../contact-info/contact-info.ops');
const userDocumentsModel = require('../user-document/user-document.ops');
module.exports = {
  userCreate: async({
    user,
    contact,
    documents
  })=> sequelize.transaction(
    async(transaction)=>{
      const { id } = await userModel.createUser({ ...user }, transaction);
      await contactModel.createContactInfo({userId: id, ...contact}, transaction);
      await userDocumentsModel.createUserDocument({userId: id, ...documents}, transaction);
      return id;
    }
  )
}