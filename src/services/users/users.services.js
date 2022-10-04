const userModel = require('./user.ops');
const crypto = require('../../libraries/tools/crypto');
const config = require('../../config')
module.exports = {
    getAllUsers: async()=>{
        const response = await userModel.getAllUsers();
        return response;
    },
    
    getUserById: async(id)=>{
        const response = await userModel.getUserById(id);
        return response;
    },

    createUser: async(userInformation)=>{
        const { password, email, ...userInformationCopy } = userInformation;

        const isFinedUser = !!await userModel.getOneUser({ email });

        if (isFinedUser) {
            throw new Error('User email already exits');
        }

        const passwordEncrypt = crypto.encryptString(config.keySecret ,password);

        const response = await userModel.createUser({...userInformationCopy, email, password: passwordEncrypt});
        return response;
    },
    
    updateUser: async(id, userInformation)=>{
        const { email, ...userInformationCopy } = userInformation;

        const isFinedUser = !!await userModel.getOneUser({ email });

        if (isFinedUser) {
            throw new Error('User email already exits');
        }
        await userModel.updateUser({ id }, {email, ...userInformationCopy});
        const response = await userModel.getUserById({ id });
        return response;
    },

    deleteUser: async(id)=>{
      const response = await userModel.deleteUser(id);
      return response;
    }

}