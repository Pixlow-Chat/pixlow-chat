import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="bg-primary mx-auto py-8 display-block ">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="flex justify-between items-center">
					<div className="flex justify-start">
						<button className="over:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							<span className="font-PressStart2P text-white text-xl">
								PixlowChat
							</span>
						</button>
					</div>
					<div className="flex justify-end">
						<button className="mx-2 over:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							<span className="font-PressStart2P text-white text-md">
								Join Room
							</span>
						</button>
						<button className=" mx-2 over:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							<span className="font-PressStart2P text-white text-md">
								Start Room
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Header;
