import {useState} from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ProjectCards from "./components/ProjectCards";

const projects = [
  {
    title: "Weather App",
    description: "Responsive weather application using Open-Meteo API with real-time weather search.",
    tech: "React • CSS • API",
    github: "#",
    demo: "#"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React featuring dark/light mode and responsive design.",
    tech: "React • CSS",
    github: "#",
    demo: "#"
  },
  {
    title: "AI Job Helper",
    description: "Automates job discovery and organizes frontend opportunities from multiple job portals.",
    tech: "JavaScript • Automation",
    github: "#",
    demo: "#"
  }
];
function App(){
    const[darkMode,setDarkMode]=useState(false);
    return(
    <div className={darkMode?"light":"dark"}>
    <Header 
    darkMode={darkMode}
    setDarkMode={setDarkMode}
    />
    <Hero />
    <Aboutme />
    <Skills />
<section id="projects" className="container section">
    <h1>Projects</h1>

    {
        projects.map((project)=>(
            <ProjectCards
                key={project.title}
                title={project.title}
                description={project.description}
                tech={project.tech}
                github={project.github}
                demo={project.demo}
            />
        ))
    }

</section>

    <Contact />
    </div>
    )
};
export default App;