import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="bg-primary mx-auto py-8 display-block ">
			<div></div>
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="flex justify-between items-center">
					<div className="flex justify-start">
						<span className="text-white text-xl PressStart2Play">
							PixlowChat
						</span>
					</div>
					{/* <div className="flex justify-end">
						<button className="mx-2 over:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick = {joinRoomModalHandler()}>
							<span className="text-white text-sm PressStart2Play">
								Join Room
							</span>
						</button>
						<button className=" bg-accent py-3 px-5 over:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							<span className="text-white text-sm PressStart2Play ">
								Start Room
							</span>
						</button>
					</div> */}
				</div>
			</div>
		</div>
	);
};
export default Header;
