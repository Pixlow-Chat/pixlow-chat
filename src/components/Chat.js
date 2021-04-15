import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

const Chat = (props) => {
	const [yourID, setYourID] = useState();
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState("");

	const socketRef = useRef();

	useEffect(() => {
		socketRef.current = io.connect("/");

		socketRef.current.on("your id", (id) => {
			setYourID(id);
		});

		socketRef.current.on("message", (message) => {
			console.log("here");
			receivedMessage(message);
		});
	}, []);

	function receivedMessage(message) {
		setMessages((oldMsgs) => [...oldMsgs, message]);
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
							<div
								className="mx-12 my-6 px-4 py-2 bg-accent max-w-max"
								// style={{ backgroundColor: "#FF000020" }}
								key={index}
							>
								{<p class="text-white PressStart2Play text-lg   pb-2">Me</p>}
								{
									<p class="text-white PressStart2Play text-md  ">
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
										Other Person
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
					<button className="bg-accent my-auto ">
						<text className="text-white px-6 py-6 text-xl PressStart2Play">
							Send
						</text>
					</button>
				</div>
			</form>
		</div>
	);
};

export default Chat;
