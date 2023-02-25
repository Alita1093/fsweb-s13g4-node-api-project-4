require("dotenv").config();
const port = process.env.PORTU || 9001;
const server = require("./api/server");

server.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
