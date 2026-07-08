import './hero.css'

export default function Hero(){
    return(
        <div className='hero'>
            <div className="hero-content">
                <span>Learn. Build. Experiment</span>
                <h1>Master AI & ML with <span style={{color:'rgb(150, 31, 235)'}}>AI-ML Studio</span></h1>
                <p>Your all-in-one platform to learn concepts, explore projects,<br /> experiment with models and discover the relevant AI tools.</p>
                <div className="hero-buttons">
                    <button style={{backgroundColor:'indigo',color:'white',border:"none"}}>Get Started</button>
                    <button style={{color:'gray',background:'transparent',border:"2px solid gray"}}>Explore Projects</button>
                </div>
            </div>
            <img src="./HeroImg.jpeg" alt="" />
        </div>
    )
}