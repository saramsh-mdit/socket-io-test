import { socketIOInstance } from "../index";

// Middleware to check the JWT token
socketIOInstance.use((socket, next) => {
  const token = socket.handshake.query.token as string;
  if (token) {
    // @ts-ignore
    socket.decoded = token;
    next();
  } else {
    next(new Error("Authentication error"));
  }
});

// Handle socket connection
socketIOInstance.on("connection", (socket) => {
  // @ts-ignore
  console.log("A user connected:", socket.decoded);

  socket.on("message", (data) => {
    socketIOInstance.emit(
      "message",
      // @ts-ignore
      `User:${socket.decoded} - Message:${data}`
    );
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});
