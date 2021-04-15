import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Chat, Header } from "../components";
import ChatAttendee from "../components/ChatAttendee.js";
import link from "../assets/img/link.png";

const ChatPage = () => {
	return (
		<div>
			<div id="chat-section" className="h-screen w-full">
				<Header />
				<div className="w-full h-full flex flex-row flex-nowrap">
					<div className="h-full w-4/5">
						<div className="h-full flex flex-col flex-nowrap justify-end">
							<Chat></Chat>
						</div>
					</div>
					<div className="bg-primary pl-4 py-6">
						<text className="text-center text-white PressStart2Play">
							Room Attendees
						</text>
						<div className="flex flex-col flex-nowrap overflow-y-scroll flex-1 justify-start">
							<ChatAttendee icon={link} name={"greg"} />
						</div>
					</div>
				</div>
			</div>
			{/* <Chat /> */}
			{/* Chat component is just here for testing, try sending a message w/ 2 instances of the project open */}
		</div>
	);
};
export default ChatPage;
