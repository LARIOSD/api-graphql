const sql = require('../../../db/models');

module.exports = {
  userCreate: async()=>{
    
  }
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