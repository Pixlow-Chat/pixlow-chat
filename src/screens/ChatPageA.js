import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Chat, ChatHeader } from "../components";
import ChatAttendee from "../components/ChatAttendee.js";
import ChatAttendeeYou from "../components/ChatAttendeeYou.js";
import link from "../assets/img/link.png";
import edit from "../assets/img/edit_no_background.png";
import {socketRef} from "../context/socket"
const ChatPageA = (props) => {
	const roomID = "A"
	const [attendees, setAttendees] = useState([
		{ icon: link, name: "Me" },
		{ icon: link, name: "Tyler" },
	]);
	// Room ID
	const [roomName, setRoomName] = useState(`Room ${roomID}`);
	const [tempRoomName, setTempRoomName] = useState("");
	const [formHidden, setFormHidden] = useState(false);	

	const handleSubmit = () => {};
	return (
		<div className="h-screen w-screen overscroll-none">
			<div id="chat-section" className="h-screen w-screen overscroll-none">
				<div className="bg-primary mx-auto py-8 display-block ">
					<div className="flex justify-between items-center">
						<div className="flex flex-row flex-nowrap justify-start">
							<p className="text-white text-xl PressStart2Play pl-24">
								{roomName}
							</p>
						</div>
					</div>
				</div>
				<div className="absolute bottom-0 w-screen h-screen">
					<div className=" w-full h-full  flex flex-row flex-nowrap">
						<div className="h-full w-4/5">
							<div className="h-full flex flex-col flex-nowrap justify-end">
								{/* Room ID */}
								<Chat roomID={roomID}></Chat>
							</div>
						</div>
						<div className="bg-accent pl-4 py-6 flex-1">
							<div>
								<div className="flex flex-col flex-nowrap align-start justify-start border-b-2 border-white py-4">
									<div className="flex flex-row flex-nowrap justify-start">
									
											<button
												className="bg-primary-dark py-3 px-5 mx-1 over:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
												// Room ID 
												onClick={() => {socketRef.emit("leave room", {roomID}); props.history.push("/")}}
											>
												<span className="text-white text-xs PressStart2Play ">
													Leave Room
												</span>
											</button>
										
										<button
											onClick={() => setFormHidden(!formHidden)}
											className="bg-accent-light py-3 px-5 mx-1 over:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											<span className="text-white text-xs PressStart2Play ">
												Rename Room
											</span>
										</button>
									</div>
									{/* <button
										className="bg-white w-full py-3 mx-2 my-2 over:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										onPress={[]}
									>
										<span className="text-xs PressStart2Play ">Copy Link</span>
									</button> */}
									{formHidden && (
										<form
											onSubmit={() => {
												if (tempRoomName !== "") {
													setRoomName(tempRoomName);
													setFormHidden(!formHidden);
													setTempRoomName("");
												} else {
													setFormHidden(!formHidden);
												}
											}}
											className=" py-2"
										>
											<label>
												<h3 className="text-center text-white text-xs PressStart2Play">
													Enter a new room name
												</h3>
											</label>
											<div className="flex flex-row flex-nowrap flex-1">
												<input
													className="flex-1 px-4 py-2 text-xs PressStart2Play"
													type="text"
													value={tempRoomName}
													onChange={(e) => setTempRoomName(e.target.value)}
												/>

												<input
													type="submit"
													value="Save"
													className="flex-shrink bg-accent-light px-6 py-4 PressStart2Play text-xs"
												/>
											</div>
										</form>
									)}
								</div>

								<text className="text-center text-white PressStart2Play mt-4 py-3">
									Room Attendees
								</text>
								<div className="flex flex-col flex-nowrap overflow-y-scroll flex-1 justify-start">
									<ChatAttendeeYou icon={link} name={"Me"} role={"host"} />
									<ChatAttendee icon={link} name={"Tyler"} role={"member"} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <Chat /> */}
			{/* Chat component is just here for testing, try sending a message w/ 2 instances of the project open */}
		</div>
	);
};
export default ChatPageA;
