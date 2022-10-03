const userModel = require('./user.ops');

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
        const response = await userModel.createUser(userInformation);
        return response;
    },
    
    updateUser: async(id, userInformation)=>{
        await userModel.updateUser({id},userInformation);
        const response = await userModel.getUserById({ id });
        return response;
    },

    deleteUser: async(id)=>{
      const response = await userModel.deleteUser(id);
      return response;
    }

}