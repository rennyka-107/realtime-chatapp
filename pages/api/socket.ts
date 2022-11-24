import { Server } from "socket.io";
import RedisService from "services/redis";

const SocketHandler = (req: any, res: any) => {
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;
    io.on("connection", (socket) => {
      console.log("connection successfully!");
      socket.on("send-message-to-server", (objMsg) => {
        console.log(objMsg, "obj message");
        try {
          RedisService.hset("message", objMsg.id, JSON.stringify(objMsg));
          io.emit("send-message-to-client", objMsg);
        } catch (err) {
          console.log(err);
        }
      });
    });
  }
  res.end();
};

export default SocketHandler;
