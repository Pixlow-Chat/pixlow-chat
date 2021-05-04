import io from "socket.io-client";
export const socketRef = io.connect("/");