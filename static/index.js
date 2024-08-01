const textArea = document.querySelector("#message");
const chats = document.querySelector("#chats");
const sendBtn = document.querySelector("#send");

const socket = io();

// Send
sendBtn.addEventListener("click", () => {
  const message = textArea.value;
  if (message) {
    socket.emit("message", message);
    textArea.value = "";
  }
});

// Receive
socket.on("message", (msg) => {
  console.log(msg);
});
