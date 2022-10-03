module.exports = {
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
    dialect  : 'mysql',
    define   : {
        timestamp       : true,
        freezeTableName : true,
        createdAt       : 'created_at',
        updatedAt       : 'updated_at',
      },
};