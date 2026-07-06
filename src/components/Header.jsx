import "./Header.css";
function Header({darkMode , setDarkMode}){
    return (
        <header>
            <h1>Aryan's Portfolio </h1>
            <nav>
                <a href="#aboutme">About me </a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contacts">Contact</a>
                <a href="/resume.pdf" download>Resume</a>
            </nav>
        <button className={darkMode? "dark" : "light"}
            onClick={()=>setDarkMode(!darkMode)}> {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"} </button>
</header>
    )};
export default Header ; 