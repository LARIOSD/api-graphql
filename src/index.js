const http = require('http');
const app = require('./app');
const config = require('./config');

const server = http.createServer(app);
server.listen(config.serverPort, () => {
    console.log(`Server running on the port -> ${config.serverPort}`);
});