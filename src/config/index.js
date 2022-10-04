const db = require('../../db/models');

module.exports = {
    env        : process.env.NODE_ENV,
    serverPort : parseInt(process.env.SERVER_PORT,10) ||8080,
    keySecret  : process.env.KEY_SECRET,
    pruebaDB   : {
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
    }     

  };