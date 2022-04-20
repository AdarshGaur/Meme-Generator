import React from "react"

export default function Meme(){
	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImg: "https://i.imgflip.com/2hgfw.jpg"
	})
	
	const [allMemes, setAllMemes] = React.useState([])
	
	React.useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then(res => res.json())
			.then(res => setAllMemes(res.data.memes))
	}, [])
	
	function handleChange(event){
		const {name, value} = event.target
		setMeme(prev => ({
			...prev,
			[name]: value,
		}))
	}
	
	function getMemeImage(){
		const index = Math.floor(Math.random() * allMemes.length)
		const url = allMemes[index].url
		setMeme(prev => ({
			...prev,
			randomImg: url,
		}))
	}
	
	return(
		<main>
			<div className="form">
				<input type='text' placeholder="Top-Text" className="form-input" name="topText" value={meme.topText} onChange={handleChange}
				/>
				<input type='text' placeholder="Bottom-text" className="form-input" name="bottomText" value={meme.bottomText} onChange={handleChange}
				/>
				<button className="form-button" onClick={getMemeImage}> Get a new meme image 🖼</button>
			</div>
			<div className="meme">
				<img src={meme.randomImg} className="meme-image"/>
				<h2 className="meme-text top">{meme.topText}</h2>
				<h2 className="meme-text bottom">{meme.bottomText}</h2>
			</div>
		</main>
	)
}