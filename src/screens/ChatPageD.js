import React, { useState, useEffect } from "react";
import { Chat } from "../components";

import { socketRef } from "../context/socket";
const ChatPageD = (props) => {
  const roomID = "D";
  const [attendees, setAttendees] = useState([]);
  useEffect(() => {
    socketRef.on("refresh attendees", (userData) => setAttendees(userData));
  }, []);

  const [roomName, setRoomName] = useState(`Room ${roomID}`);

  return (
    <div className="h-screen w-screen overscroll-none">
      <div id="chat-section" className="h-screen w-screen overscroll-none">
        <div className="bg-primary mx-auto h-24 display-block z-50">
          <div className="flex justify-between items-center">
            <div className="flex flex-row flex-nowrap justify-start items-center">
              <p className="text-white text-xl PressStart2Play pl-24 mt-6">
                {roomName}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-screen h-screen">
          <div className=" w-full h-full  flex flex-row flex-nowrap">
            <div className="h-full w-4/5">
              <div className="h-full flex flex-col flex-nowrap justify-end">
                <Chat roomID={roomID}></Chat>
              </div>
            </div>
            <div className="bg-accent pl-4 py-6 flex-1">
              <div>
                <div className="flex flex-col flex-nowrap align-start justify-start border-b-2 border-white py-4">
                  <div className="flex flex-row flex-nowrap justify-start">
                    <button
                      className="bg-primary-dark py-3 px-5 mx-1 over:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full"
                      onClick={() => {
                        socketRef.emit("leave room", { roomID });
                        props.history.push("/");
                      }}
                    >
                      <span className="text-white text-xs PressStart2Play ">
                        Leave Room
                      </span>
                    </button>

                    
                  </div>
                  
                </div>

                <text className="text-center text-white PressStart2Play mt-4 py-3">
                  Room Attendees ({attendees.length})
                </text>
                <div className="flex flex-col flex-nowrap overflow-y-scroll flex-1 justify-start">
                  {attendees.map((item, index) => (
                    <div className="flex flex-row flex-nowrap justify-start align-middle my-2">
                      <img src={item.icon} className="w-8 h-8 mx-2" />
                      <text className="text-white text-left text-lg my-auto PressStart2Play">
                        {item.name}
                      </text>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatPageD;
