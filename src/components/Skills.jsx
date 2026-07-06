import "./Skills.css";
function Skills(){
    const frontendSkills =["React.js" , "HTML5", "CSS3", "Tailwind CSS" ,"Bootstrap"];
    const backendSkills =[  "Node.js","Express.js","REST APIs"];
const languageSkills = [
  "Java",
  "JavaScript",
  "Python",
  "C++"
];

const conceptSkills = [
  "OOP",
  "Data Structures",
  "REST APIs",
  "Responsive Design",
  "DOM Manipulation",
  "Fetch API"
];
    return(
        <section id="skills" className="container section">
            <h1> Skills </h1>
            <h2>Frontend </h2>
            <div className="skill-list">
            {
          frontendSkills.map((skill)=> (
            <span key={skill}>{skill}</span>

        )) }
            </div>
            <h2>Backend</h2>
                <div className="skill-list">
            {
          backendSkills.map((skill)=> (
            <span key={skill}>{skill}</span>

        )) }

            </div>
            <h2>Programming Languages</h2>
                        <div className="skill-list">
            {
          languageSkills.map((skill)=> (
            <span key={skill}>{skill}</span>

        )) }
            </div>
            <h2> Concept Skills</h2>
                        <div className="skill-list">
            {
          conceptSkills.map((skill)=> (
            <span key={skill}>{skill}</span>

        )) }
            </div>

        </section>
  )
};

export default Skills;