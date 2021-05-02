import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import {socketRef} from "../context/socket"

const Chat = (props) => {
	const [yourID, setYourID] = useState();
	const [yourNick, setYourNick] = useState("")
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState("");

	const roomID = props.roomID;

	useEffect(() => {
		// socketRef.current = io.connect("/");
		
		socketRef.emit("join room", roomID)
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
		socketRef.emit("send message", {body: message, id: yourID, nick: yourNick, room: roomID});
	}

	function handleChange(e) {
		setMessage(e.target.value);
	}

	return (
		<div>
			<div className="overflow-y-hidden">
				{messages.map((message, index) => {
					if (message.id == yourID) {
						return (
							<div
								className="mx-12 my-6 px-4 py-2 bg-accent max-w-max"
								// style={{ backgroundColor: "#FF000020" }}
								key={index}
							>
								{<p class="text-white PressStart2Play text-lg   pb-2">{message.nick}</p>}
								{
									<p class="text-white PressStart2Play text-md ">
										{message.body}
									</p>
								}
							</div>
						);
					} else {
						return (
							<div
								className="mx-12 my-6 px-4 py-2 bg-primary max-w-max"
								// style={{ backgroundColor: "#FF000020" }}
								key={index}
							>
								{
									<p class="text-white PressStart2Play text-lg   pb-2">
										{message.id}
									</p>
								}
								{
									<p class="text-white PressStart2Play text-md  ">
										{message.body}
									</p>
								}
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
						class="flex-1 border-3"
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
