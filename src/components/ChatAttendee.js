import React, { useState } from "react";
import { Link } from "react-router-dom";

const ChatAttendee = (props) => {
	const [isYou, setIsYou] = useState(false);
	return (
		<div className="flex flex-row flex-nowrap justify-between align-middle border-b-2 border-white py-2">
			<div className="flex flex-row flex-nowrap justify-start align-middle">
				<img src={props.icon} className="w-8 h-8 mx-2" />
				<text className="text-white text-left text-lg my-auto PressStart2Play">
					{props.name}
				</text>
			</div>
			{props.role != "host" && (
				<button
					onClick={() => console.log("kicked")}
					className="bg-accent-dark py-1 px-2 mx-1 float-right over:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					<span className="text-white text-xs PressStart2Play ">Kick</span>
				</button>
			)}
		</div>
	);
};

export default ChatAttendee;
