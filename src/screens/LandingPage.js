import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components";
import chat_bubble from "../assets/img/chat_bubble.png";
import box from "../assets/img/box.png";

const LandingPage = () => {
	return (
		<div>
			<Header />
			<div className="bg-black py-64 px-12 object-center mx-auto  ">
				<div className="flex flex-row-reverse flex-wrap md:mr-36">
					<div className="w-full md:w-6/12 sm:px-2 md:px-10 px-24">
						<div className="md:float-left center">
							<h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:text-left text-center text-white PressStart2Play">
								PixlowChat
							</h1>
							<h4 className="text-sm md:text-md lg:text-lg xl:text-xl md:text-left text-center text-white PressStart2Play">
								A Simple Chat Room
							</h4>
						</div>
					</div>
					<div className="w-full md:w-6/12  sm:px-2 md:px-10 px-24">
						<div className="md:float-right center">
							<button className="bg-accent py-3 px-5 mb-6">
								<h3 className="text-center text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl PressStart2Play">
									Make Room
								</h3>
							</button>
							<h3 className="text-center text-white text-lg md:text-xl lg:text-2xl xl:text-3xl PressStart2Play">
								Join Room
							</h3>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-gray py-48 px-12 mx-auto">
				<div className="mb-36">
					<h2 className="PressStart2Play text-xl md:text-2xl lg:text-3xl text-white text-center">
						How It Works
					</h2>
				</div>
				<div className="mx-auto justify-center md:flex md:flex-row md:flex-wrap w-full">
					<div classNam="w-1/3">
						<img src={chat_bubble} className="w-1/3 mx-auto" />
						<div className="mx-auto px-12 w-1/2 text-center">
							<p className="PressStart2Play text-white">
								This is a text box explaining something
							</p>
						</div>
					</div>
					<div classNam="w-1/3">
						<img src={chat_bubble} className="w-1/3 mx-auto" />
						<div className="mx-auto px-12 w-1/2 text-center">
							<p className="PressStart2Play text-white">
								This is a text box explaining something
							</p>
						</div>
					</div>
					<div classNam="w-1/3">
						<img src={chat_bubble} className="w-1/3 mx-auto" />
						<div className="mx-auto px-12 w-1/2 text-center">
							<p className="PressStart2Play text-white">
								This is a text box explaining something
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default LandingPage;
