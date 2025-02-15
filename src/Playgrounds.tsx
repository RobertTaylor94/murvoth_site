import NavBar from "./NavBar";
import ProjectCard from "./ProjectCard";

function Playgrounds() {

    const projects = [
      { title: "Homelab", imgSrc: "example.jpeg", desc: "The ongoing creation of my Homelab and the various parts I'm playing with.", link: "homelab" },
      { title: "LegendBot", imgSrc: "example.jpeg", desc: "A discord bot I made to use with my friends TTRPG game. The bot allows users to roll dice with modifiers, save expressions for use later, change dice colour and more.", link: "legendbot" },
      { title: "BusWatch", imgSrc: "example.jpeg", desc: "A test project to learn react. Displays bus stops near your location, showing you upcoming buses with live info, timetables and routes.", link: "buswatch" }
    ]

    return (
      <>
        <NavBar />
        <div className="container mt-4">
          <div className="row">
            {projects.map((project, index) => (
              <div className="m-3" key={index}>
                <ProjectCard
                  title={project.title}
                  imgSrc={project.imgSrc}
                  desc={project.desc}
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
}

export default Playgrounds