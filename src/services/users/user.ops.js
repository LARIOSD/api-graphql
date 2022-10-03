const sequelize = require('sequelize');
const User = require('../../../db/models').user;
console.log('aaa');
module.exports ={
    getAllUsers: async()=>{
        const result = await User.findAll();
        return result;
    },

    createUsers: async(userInformation)=>{
        const result = await User.create({
            where: {...userInformation}
        });
        return result;
    },
}