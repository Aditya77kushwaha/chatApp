const express = require("express");
const app = express();
const server = require("http").createServer(app);
const port = process.env.PORT || 5000;
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("a user connected :D");
  socket.on("chat message", (msg) => {
    console.log(msg);
    io.emit("chat message", msg);
  });
});

server.listen(port, () => console.log("server running on port:" + port));
