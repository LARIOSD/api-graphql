const sql = require('../../../db/models');

module.exports ={
    getAllUsers: async()=>{
        const result = await sql.user.findAll();
        return result;
    },

    getUserById: async(id)=>{
        const result = await sql.user.findOne({where: {...id }});
        return result;
    },

    createUser: async(userInformation)=>{
        const result = await sql.user.create({...userInformation});
        return result;
    },

    updateUser: async(id, userInformation)=>{
        const result = await sql.user.update({...userInformation},{
            where: { ...id }
        });
        return result;
    },

    deleteUser: async(id)=>{
        const result = await sql.user.destroy({
            where: { ...id }
        })
        return result;
    }
}