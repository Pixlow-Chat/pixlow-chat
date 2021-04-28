import React, { useState } from "react";
import { Link } from "react-router-dom";

import link from "../assets/img/link.png";
import edit from "../assets/img/edit_no_background.png";
import make_room from "../assets/img/make_room.png";
import chat_bubble from "../assets/img/chat_bubble.png";
import rocket from "../assets/img/userIcons/rocket.png";

const ChatAttendeeYou = (props) => {
	const [renameHidden, setRenameHidden] = useState(false);
	// const [tempName, setTempName] = useState("");
	const [name, setName] = useState("");
	const [chooseIconVisible, setChooseIconVisible] = useState(false);
	const [iconsList, setIconsList] = useState([
		link,
		edit,
		make_room,
		chat_bubble,
		rocket,
	]);
	const [icon, setIcon] = useState("none");
	return (
		<div className=" border-b-2 border-white py-2">
			<div className="flex flex-row flex-nowrap justify-between align-middle ">
				<div className="flex flex-row flex-nowrap justify-start align-middle">
					<button onClick={() => setChooseIconVisible(!chooseIconVisible)}>
						{icon == "none" && (
							<div className="bg-white w-8 h-8 border-2 rounded-md mx-2"></div>
						)}
						{icon != "none" && <img src={icon} className="w-8 h-8 mx-2 br-8" />}
					</button>
					<text className="text-white text-left text-nd my-auto PressStart2Play">
						<span className="text-xs">(Me)</span>
						{name}
					</text>
				</div>
				{!renameHidden && (
					<button
						onClick={() => setRenameHidden(!renameHidden)}
						className="bg-accent-light py-1 px-2 mx-1 float-right over:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						<span className="text-white text-xs PressStart2Play ">Rename</span>
					</button>
				)}
			</div>
			{renameHidden && (
				<form
					onSubmit={() => {
						setName(name);
						setRenameHidden(!renameHidden);
						// setTempName("");
					}}
					className=" py-3"
				>
					<div className="flex flex-row flex-nowrap flex-1">
						<input
							className="flex-1 px-4 py-2 text-xs PressStart2Play"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>

						<input
							type="submit"
							value="Save"
							className="flex-shrink bg-accent-light px-6 py-4 PressStart2Play text-xs"
						/>
					</div>
				</form>
			)}
			{chooseIconVisible && (
				<div>
					<h3 className="text-center text-white text-xs PressStart2Play">
						Choose an Icon
					</h3>
					<div className="py-8 flex flex-row flex-wrap justify-evenly">
						{iconsList.map((name, index) => (
							<button
								onClick={() => {
									setIcon(name);
									setChooseIconVisible(!chooseIconVisible);
								}}
							>
								<img src={name} key={index} className="w-8 h-8" />
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default ChatAttendeeYou;
