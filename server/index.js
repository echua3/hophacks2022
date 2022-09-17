// const app = require("./app");
// const http = require("http");
// const config = require("./utils/config");
// const logger = require("./utils/logger");

// const server = http.createServer(app);

// // server.listen(config.PORT, () => {
// //   logger.info(`Server running on port ${config.PORT}`);
// // });

// const PORT = 3001
// app.listen(PORT)
// console.log(`Server running on port ${PORT}`)

const http = require("http");

const app = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello World");
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);

let splodes = [
{
    id: 1,
    headline: "JHet Sweeps HopHacks",
    
}

]