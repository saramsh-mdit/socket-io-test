import cors from "cors";
import express from "express";
import http from "node:http";
import path from "node:path";
import socketIO from "socket.io";
import router from "./controller/routes";
import ErrorHandler from "./middlewares/error";

const app = express();
const server = http.createServer(app);
export const socketIOInstance = new socketIO.Server(server, {
  cors: {
    origin: "*",
  },
});

const PORT = process.env.PORT || 3000;
const SECRET_KEY = "your_secret_key"; // Use a strong secret key
const staticPath = path.join(process.cwd(), "static");

// middlewares
app.use(cors());
app.use(express.static(staticPath));
app.use(router);

app.use(ErrorHandler);

server.listen(PORT, () => {
  console.log("Server is Running at PORT:", PORT);
});
