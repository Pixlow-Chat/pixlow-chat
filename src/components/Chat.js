import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

const Chat = (props) => {
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect('/');

    socketRef.current.on("your id", id => {
      setYourID(id);
    })

    socketRef.current.on("message", (message) => {
      console.log("here");
      receivedMessage(message);
    })
  }, []);

  function receivedMessage(message) {
    setMessages(oldMsgs => [...oldMsgs, message]);
  }

  function sendMessage(e) {
    e.preventDefault();
    const messageObject = {
      body: message,
      id: yourID,
    };
    setMessage("");
    socketRef.current.emit("send message", messageObject);
  }

  function handleChange(e) {
    setMessage(e.target.value);
  }

  return (
    <div>
      <div>
        {messages.map((message, index) => {
          if (message.id == yourID) {
            return (
              <div style={{backgroundColor: '#FF000020'}} key={index}>
                <p>Me: {message.body}</p>
              </div>
            );
          } else {
            return (
              <div style={{backgroundColor: '#00FF0020'}} key={index}>
                <p>Other person: {message.body}</p>
              </div>
            );
          }
        })}
      </div>
      <form onSubmit={sendMessage}>
        <textarea value={message} onChange={handleChange} placeholder={"Say something..."}></textarea>
        <button>Send</button>
      </form>
    </div>
  );
};

export default Chat;
