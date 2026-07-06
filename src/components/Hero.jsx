import profile from "../assets/profile.png";
import "./Hero.css";
import "./Container.css";
import "./Section.css";
function Hero(){
    return(
        <section id="hero" className="container section">
            <div id="left">
            <h1> Hi,I'm 👋 </h1>
            <h2>ARYAN KHANDURI </h2>
            <h3>Aspiring Frontend Developer</h3>
            <p>Computer Science graduate passionate about building responsive web applications with React and JavaScript. Currently expanding into full-stack development while creating real-world projects.</p>
            <div id="buttons">
            <button id="contactme" >View Projects</button>
            <button id="resume">Download Resume</button>

            </div>
            </div>
            <div id="right">
            <img src={profile} alt="Aryan" id="profilepic"></img>
            </div>
        </section>
        
    )
};
export default Hero;