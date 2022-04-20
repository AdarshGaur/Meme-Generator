import React from "react";
import img from "../images/trollface.png"

export default function Navbar(){
	return(
		<nav className="navbar">
			<img src={img} alt="troll-face"/>
			<h1>Meme Generator</h1>
			<h3>React Project</h3>
		</nav>
	)
}