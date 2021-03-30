import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Chat, Header } from "../components";

const ChatPage = () => {
	return (
		<div>
			<Header />

			<Chat />
			{/* Chat component is just here for testing, try sending a message w/ 2 instances of the project open */}
		</div>
	);
};
export default ChatPage;
