import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, Chat } from "../components";

import make_room from "../assets/img/make_room.png";
import link from "../assets/img/link.png";
import chat_bubble from "../assets/img/chat_bubble.png";
import box from "../assets/img/box.png";
import background from "../assets/landing_page_background.png";
import {socketRef} from "../context/socket"
const LandingPage = (props) => {
	// const [attendees, setAttendees] = useState({ name: "test" });

	// const [roomCode, setRoomCode] = useState("");
	const handleSubmit = (room) => {
		// evt.preventDefault();
		alert(`Joining Room ${room}`);
		props.history.push(`/chat${room}`)
	};
	return (
		<div className="w-full overscroll-none">
			<Header />
			<div
				className="py-6 px-2 md:py-24 md:px-12 object-center mx-auto md:py-64"
				style={{
					backgroundImage: `url(${background})`,
					backgroundSize: "auto",
					backgroundPosition: "top",
				}}
			>
				<div className="flex flex-col flex-wrap bg-primary py-12 mx-2 md:mx-auto  ">
					<div className="flex flex-col flex-nowrap justify-center mx-auto md:flex-row">
						<div className=" md:w-6/12 sm:px-2 md:px-10 ">
							<div className="md:float-left center py-6">
								<h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl md:text-left text-center text-white PressStart2Play">
									PixlowChat
								</h1>
								<h4 className="text-sm md:text-sm lg:text-md xl:text-xl md:text-left text-center text-white PressStart2Play">
									A Simple Chat Room
								</h4>
							</div>
						</div>
						<div className=" md:w-6/12  sm:px-2 md:px-10 px-24 mx-auto">
							<div className="md:float-right center">
								<Link to="/chat" class=" ">
									<h3 className="text-center text-white bg-accent text-xl py-6 px-5 mb-2  md:text-2xl lg:text-3xl xl:text-4xl PressStart2Play">
										Make Room
									</h3>
								</Link>
							</div>
						</div>
					</div>
					<form className="px-12 pt-12 mx-auto">
						<label>
							<h3 className="text-center text-white text-md md:text-lg lg:text-xl xl:text-2xl PressStart2Play">
								Join Room
							</h3>
						</label>
						<div className="flex flex-col flex-nowrap flex-1 md:flex-row">
							{/* <input
								className="w-4/5 mx-auto md:w-auto md:flex-1 px-2 py-2 PressStart2Play my-2 md:py-4 md:mx-0"
								type="text"
								value={roomCode}
								onChange={(e) => setRoomCode(e.target.value)}
							/>

							<input
								type="submit"
								value="Join!"
								className="w-4/5 mx-auto flex-shrink bg-black px-6 py-4 PressStart2Play text-white my-2"
							/> */}
							<button onClick={()=>handleSubmit("A")}>
								<h3 className="m-3 text-center text-white bg-accent text-xl py-6 px-5 mb-2  md:text-2xl lg:text-3xl xl:text-4xl PressStart2Play">
									A
								</h3>
							</button>
							<button onClick={()=>handleSubmit("B")}>
								<h3 className="m-3 text-center text-white bg-accent text-xl py-6 px-5 mb-2  md:text-2xl lg:text-3xl xl:text-4xl PressStart2Play">
									B
								</h3>
							</button>
						</div>
					</form>
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
						<img src={make_room} className="w-1/3 mx-auto" />
						<div className="mx-auto px-12 w-1/2 text-center">
							<br></br>
							<p className="PressStart2Play text-white">
								Create<br></br>Room
							</p>
						</div>
					</div>
					<div classNam="w-1/3">
						<img src={link} className="w-1/3 mx-auto" />
						<div className="mx-auto px-12 w-1/2 text-center">
							<br></br>
							<p className="PressStart2Play text-white">
								Share<br></br>Link
							</p>
						</div>
					</div>
					<div classNam="w-1/3">
						<img src={chat_bubble} className="w-1/3 mx-auto" />
						<div className="mx-auto px-12 w-1/2 text-center">
							<br></br>
							<p className="PressStart2Play text-white">
								Chat<br></br>Away
							</p>
						</div>
					</div>
				</div>
			</div>
			<a href="https://www.freepik.com/vectors/shapes">
				Shapes vector created by starline - www.freepik.com
			</a>
		</div>
	);
};
export default LandingPage;
