import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Meme from "./Components/Meme";

export default function App(){
	return(
		<div>
			<Navbar />
			<Meme />
		</div>
	);
}