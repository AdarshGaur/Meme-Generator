import React from "react"

export default function Meme(){
	return(
		<main>
			<div className="form">
				<input type='text' placeholder="Top-Text" className="form-input"/>
				<input type='text'placeholder="Bottome-text" className="form-input"/>
				<button className="form-button"> Get a new meme image 🖼</button>
			</div>
		</main>
	)
}