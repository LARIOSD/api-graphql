const config = require('../../config');
const userModel = require('./user.ops');
const userHooks = require('./user.hooks');
const crypto = require('../../libraries/tools/crypto');
const userDocumentsModel = require('../user-document/user-document.ops');

module.exports = {
    getAllUsers: async()=>{
        try {
            const response = await userModel.getAllUsers();
            return response;
        } catch (error) {
            return error;
        }
    },
    
    getUserById: async(id)=>{
        const response = await userModel.getUserById(id);
        return response;
    },

    createUser: async(userInformation)=>{
        try {
            const { user, documents, contact } = userInformation;
            const { password, email, ...userCopy } = user;

            const isFinedUser = !!await userModel.getOneUser({ email });
            const isDocumentUser = !!await userDocumentsModel.getOneUserDocument({ document: documents.document });

            
            if (isFinedUser || isDocumentUser) throw new Error('User already exits');
            
            const passwordEncrypt = crypto.encryptString(config.keySecret ,password);

            const id  = await userHooks.userCreate({ password: passwordEncrypt, email, userCopy }, documents, contact);
            const response = await userModel.getOneUser({ id });
            console.log(response);
           return response;
        } catch (error) {
            return error;
        }
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