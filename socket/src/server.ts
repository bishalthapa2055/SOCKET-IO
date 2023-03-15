import { Server } from "socket.io";
import cors from "cors";
import express from "express";

const app = express();

app.use(cors());
const io = new Server({
  cors: {
    origin: "http://127.0.0.1:5173",
  },
});

let onlineUsers: any = [];
const addNewUser = (username: any, socketId: string) => {
  !onlineUsers.some((user: any) => user.username === username) &&
    onlineUsers.push({ username, socketId });
  // console.log(username, socketId);
};

const removeUser = (socketId: string) => {
  onlineUsers = onlineUsers.filter((user: any) => user.socketId !== socketId);
};

const getUser = (username: any) => {
  const data = onlineUsers?.find((user: any) => user.username === username);
  console.log(data);
  return data;
};

io.on("connection", (socket) => {
  console.log("someone has connected");
  socket.on("addNewUser", (username) => {
    // console.log(socket.id);
    addNewUser(username, socket.id);
  });

  socket.on("sendNotification", ({ senderName, recieverName, type }) => {
    console.log("sendername ", senderName);
    console.log("receivername", recieverName);
    const receiver = getUser(recieverName);
    console.log("🚀 ~ file: server.ts:36 ~ socket.on ~ receiver:", receiver);
    console.log(receiver?.socketId);
    io.to(receiver?.socketId).emit("getNotification", {
      senderName,
      type,
    });
  });

  socket.on("disconnect", () => {
    console.log("someone has left");
    removeUser(socket.id);
  });
});

io.listen(5000);
