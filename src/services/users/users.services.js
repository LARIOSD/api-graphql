const userModel = require('./user.ops');

module.exports = {
    getAllUsers: async()=>{
        const response = await userModel.getAllUsers();
        return response;
    },

    createUser: async(userInformation)=>{
        const response = await userModel.createUsers({userInformation});
        return response;
    }
    

}