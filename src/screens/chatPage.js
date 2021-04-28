import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Chat, ChatHeader } from "../components";
import ChatAttendee from "../components/ChatAttendee.js";
import link from "../assets/img/link.png";

const ChatPage = () => {
	return (
		<div className="h-screen w-screen overscroll-none">
			<div id="chat-section" className="h-screen w-screen overscroll-none">
				<div className="bg-primary mx-auto py-8 display-block ">
					<div className="max-w-7xl mx-auto px-4 sm:px-6">
						<div className="flex justify-between items-center">
							<div className="flex justify-start">
								<button className="over:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
									<span className="text-white text-xl PressStart2Play">
										Room Name
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="absolute bottom-0 w-screen h-screen">
					<div className=" w-full h-full  flex flex-row flex-nowrap">
						<div className="h-full w-4/5">
							<div className="h-full flex flex-col flex-nowrap justify-end">
								<Chat></Chat>
							</div>
						</div>
						<div className="bg-accent pl-4 py-6 flex-1">
							<div>
								<div className="flex flex-row flex-nowrap justify-center">
									<Link to="/" class=" ">
										<button
											className="bg-primary-dark py-3 px-5 mx-2 over:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
											onPress={[]}
										>
											<span className="text-white text-xs PressStart2Play ">
												Leave Room
											</span>
										</button>
									</Link>
									<button className="bg-accent-light py-3 px-5  mx-2 over:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
										<span className="text-white text-xs PressStart2Play ">
											Copy Link
										</span>
									</button>
								</div>
								<br />
								<div className="bg-white h-1 w-full mx-auto justify-self-center"></div>
								<text className="text-center text-white PressStart2Play mt-4">
									Room Attendees
								</text>
								<div className="flex flex-col flex-nowrap overflow-y-scroll flex-1 justify-start">
									<ChatAttendee icon={link} name={"Me"} />
									<ChatAttendee icon={link} name={"Tyler"} />
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
export default ChatPage;
