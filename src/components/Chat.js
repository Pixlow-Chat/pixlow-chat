//Suggestion: imgs should have an alt prop- such as meaningful text

import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { socketRef } from "../context/socket";

import link from "../assets/img/link.png";
import edit from "../assets/img/edit_no_background.png";
import make_room from "../assets/img/make_room.png";
import chat_bubble from "../assets/img/chat_bubble.png";
import person from "../assets/img/person.png";
import rocket from "../assets/img/userIcons/rocket.png";
import circlered from "../assets/img/circlered.png"
import circleblue from "../assets/img/circleblue.png"
import circlegreen from "../assets/img/circlegreen.png"
import circlepink from "../assets/img/circlepink.png"
import circlepurple from "../assets/img/circlepurple.png"
import circleyellow from "../assets/img/circleyellow.png"
import circlebrown from "../assets/img/circlebrown.png"
import circlewhite from "../assets/img/circlewhite.png"

const Chat = (props) => {
  const [yourID, setYourID] = useState();
  const [selectedIcon, setSelectedIcon] = useState();
  const [yourName, setYourName] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [popupVisible, setPopupVisible] = useState(true);

  const [attendees, setAttendees] = useState([]);
  useEffect(() => {
    socketRef.on("refresh attendees", (userData) => setAttendees(userData));
  }, []);

  const roomID = props.roomID;

  useEffect(() => {
    // socketRef.current = io.connect("/");

    socketRef.emit("join room", roomID);
    socketRef.on("your id", (id) => {
      setYourID(id);
    });

    socketRef.on("message", (message) => {
      // alert(JSON.stringify(message));
      receivedMessage(message);
    });
  }, []);

  function receivedMessage(message) {
    setMessages((oldMsgs) => [...oldMsgs, message]);
  }

  function sendMessage(e) {
    e.preventDefault();
    // const messageObject = {
    // 	body: message,
    // 	id: yourID,
    // };
    setMessage("");
    socketRef.emit("send message", {
      body: message,
      id: yourID,
      name: yourName,
      room: roomID,
    });
  }

  function handleChange(e) {
    setMessage(e.target.value);
  }
  function handleSubmit() {
    if (yourName !== "" && selectedIcon != null) {
      //   alert(yourName);
      //   alert(selectedIcon);
      socketRef.emit("store user", { name: yourName, room: roomID, icon: selectedIcon });
      setPopupVisible(false);
    }
  }

  return popupVisible ? (
    <div
      style={{
        flex: 1,
        backgroundColor: "#1e2345",
        paddingTop: "30vh",
        paddingBottom: "30vh",
        paddingRight: "30%",
        paddingLeft: "30%",
      }}
    >
      <div className="place-self-center h-full border-8 border-primary w-min p-10">
        <h1 className="text-white PressStart2Play text-lg">Enter name</h1>
        <br></br>
        <div className="flex flex-row flex-nowrap flex-1">
          <input
            className="flex-1 px-4 py-2 text-xs PressStart2Play"
            type="text"
            value={yourName}
            onChange={(e) => setYourName(e.target.value)}
          />
        </div>
        <br />
        <h1 className="text-white PressStart2Play text-lg">Select Icon</h1>
        <br />
        <div className="flex flex-row flex-nowrap flex-1">
          <button
            style={{ border: selectedIcon === circlered ? "3px solid orange" : null }}
            onClick={() => {setSelectedIcon(circlered)}} className="mx-2 p-2">
            <img src={circlered} className="w-8 h-8 br-8" /></button>
            <button
            style={{ border: selectedIcon === circleblue ? "3px solid orange" : null }}
            onClick={() => {setSelectedIcon(circleblue)}} className="mx-2 p-2">
            <img src={circleblue} className="w-8 h-8 br-8" /></button>
            <button
            style={{ border: selectedIcon === circlegreen ? "3px solid orange" : null }}
            onClick={() => {setSelectedIcon(circlegreen)}} className="mx-2 p-2">
            <img src={circlegreen} className="w-8 h-8 br-8" /></button>
            <button
            style={{ border: selectedIcon === circlepink ? "3px solid orange" : null }}
            onClick={() => {setSelectedIcon(circlepink)}} className="mx-2 p-2">
            <img src={circlepink} className="w-8 h-8 br-8" /></button>
        </div>
        <div className="flex flex-row flex-nowrap flex-1 mt-2">
          <button
            style={{ border: selectedIcon === circlepurple ? "3px solid orange" : null }}
            onClick={() => {setSelectedIcon(circlepurple)}} className="mx-2 p-2">
            <img src={circlepurple} className="w-8 h-8 br-8" /></button>
            <button
            style={{ border: selectedIcon === circleyellow ? "3px solid orange" : null }}
            onClick={() => {setSelectedIcon(circleyellow)}} className="mx-2 p-2">
            <img src={circleyellow} className="w-8 h-8 br-8" /></button>
            <button
            style={{ border: selectedIcon === circlebrown ? "3px solid orange" : null }}
            onClick={() => {setSelectedIcon(circlebrown)}} className="mx-2 p-2">
            <img src={circlebrown} className="w-8 h-8 br-8" /></button>
            <button
            style={{ border: selectedIcon === circlewhite ? "3px solid orange" : null }}
            onClick={() => {setSelectedIcon(circlewhite)}} className="mx-2 p-2">
            <img src={circlewhite} className="w-8 h-8 br-8" /></button>
        </div>

        <br />
        <button
          onClick={handleSubmit}
          className="flex-shrink bg-accent-light px-6 py-4 PressStart2Play text-xs"
        >
          <h3>Save</h3>
        </button>
      </div>
    </div>
  ) : (
    <div>
      <div className="overflow-y-scroll">
        {messages.map((message, index) => {
          if (message.id === yourID) {
            return (
              <div
                className="mx-12 my-6 px-4 py-2 bg-accent max-w-max"
                // style={{ backgroundColor: "#FF000020" }}
                key={index}
              >
                {
                  <div className="flex flex-row">
                    <img src={selectedIcon} className="w-6 h-6 br-6 mr-4" />
                  <p className="text-white PressStart2Play text-lg   pb-2">
                    {yourName}
                  </p>

                  </div>
                }

                {
                  <p className="text-white PressStart2Play text-md ">
                    {message.body}
                  </p>
                }
              </div>
            );
          } else {
			let nameShown = "";
      let iconShown = "";
			let i;
			for (i = 0; i < attendees.length; i++) {
				if(attendees[i].id === message.id){
					nameShown = attendees[i].name
          iconShown = attendees[i].icon
				}
			}
            return (
              <div
                className="mx-12 my-6 px-4 py-2 bg-primary max-w-max"
                // style={{ backgroundColor: "#FF000020" }}
                key={index}
              >
                <div className="flex flex-row">
                    <img src={iconShown === "" ? person : iconShown} className="w-6 h-6 br-6 mr-4" />
                  <p className="text-white PressStart2Play text-lg   pb-2">
                    {nameShown === "" ? "(user disconnected)" : nameShown}
                  </p>

                  </div>

                <p className="text-white PressStart2Play text-md  ">
                  {message.body}
                </p>
              </div>
            );
          }
        })}
      </div>
      <form onSubmit={sendMessage}>
        <div className="flex flex-row flex-nowrap w-full">
          <textarea
            value={message}
            onChange={handleChange}
            placeholder={"Say something..."}
            className="flex-1 border-3"
          ></textarea>
          <button className="bg-primary">
            <text className="text-white px-6 py-10 text-xl PressStart2Play">
              Send
            </text>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
