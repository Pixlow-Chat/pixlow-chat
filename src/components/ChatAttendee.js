import React from "react";
import { Link } from "react-router-dom";

const ChatAttendee = (props) => {
	return (
		<div className="flex flex-row flex-nowrap justify-start align-middle">
			<img src={props.icon} className="w-8 h-8 mx-2" />
			<text className="text-white text-left text-lg my-auto PressStart2Play">
				{props.name}
			</text>
		</div>
	);
};

export default ChatAttendee;
