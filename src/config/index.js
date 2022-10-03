module.exports = {
    env        : process.env.NODE_ENV,
    serverPort : parseInt(process.env.SERVER_PORT,10) ||8080
  };