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

io.on("connection", (socket) => {
  // console.log("socket", socket);
  console.log("someone has connected");

  socket.on("disconnect", () => {
    console.log("someone has left");
  });
});

io.listen(5000);
