const http = require('http');
const server = require('websocket').server;

const httpServer = http.createServer(() => { });
httpServer.listen(1337, () => {
  console.log('Server listening at port 1337');
});

const wsServer = new server({
  httpServer,
});