import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Chat, Header } from "../components";

const LandingPage = () => {
	return (
		<div>
			<Header />
			<div className="bg-black py-32 px-12 object-center mx-auto  ">
				<div className="flex flex-row-reverse flex-wrap">
					<div className="md:w-6/12 w-full sm:px-2 md:px-10 px-24">
						<div className="md:float-left center">
							<h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:text-left text-center text-white">
								PixlowChat
							</h1>
						</div>
					</div>
					<div className="md:w-6/12 w-full sm:px-2 md:px-10 px-24">
						<div className="md:float-right center">
							<h3 className=" text-center text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl">
								Make Room
							</h3>
							<h3 className="text-center text-white text-lg md:text-xl lg:text-2xl xl:text-3xl">
								Join Room
							</h3>
						</div>
					</div>
				</div>
			</div>
            <Chat />
            {/* Chat component is just here for testing, try sending a message w/ 2 instances of the project open */}
		</div>
	);
};
export default LandingPage;
