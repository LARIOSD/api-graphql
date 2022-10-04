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
      console.log(user.username);
      const { id } = await userModel.createUser({ ...user }, transaction);
      console.log('1',id);
      await contactModel.createContactInfo({userId: 1, ...contact}, transaction);
      console.log('2');
      await userDocumentsModel.createUserDocument({userId: 1, ...documents}, transaction);
      console.log('3');
      return id;
    }
  )
}

// createLock: async ({
//   serial,
//   ipAddress,
//   accessAreaId,
//   actuatorType,
//   actuatorData,
//   accessLock,
// }) => sql.access_control.transaction(
//   async (transaction) => {
//     const { actuatorId } = await actuatorModel.insert(
//       { actuatorType, actuatorData }, transaction,
//     );

//     const { accessLockId } = await accessLockModel.insert(
//       { ...accessLock, actuatorId }, transaction,
//     );

//     await lockModel.insert({ serial, ipAddress, accessLockId }, transaction);

//     if (accessLock.status === 'entry') {
//       await locksInAreasModel.insert({ accessAreaId, accessLockId }, transaction);
//     }
//     return accessLockId;
//   },
// ),