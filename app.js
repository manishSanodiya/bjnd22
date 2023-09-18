const http = require('http');

const routes = require('./routes');
console.log(routes.someText);

const servers = http.createServer(routes.handler);

servers.listen(3000)