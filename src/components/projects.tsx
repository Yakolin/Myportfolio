import { useEffect, useState } from "react";
import Carousel from "./ui/carousel";
import ProjectCard , {type ProjectCardProps} from "./project-card.tsx";
const projectRoute = "/json/projects.json";

export default function Projects() {
    const [projects, setProjects] = useState<Array<ProjectCardProps>>([]);
    useEffect(()=> {
        fetch(projectRoute)
        .then((response) => response.json())
        .then((data: Array<ProjectCardProps>) => setProjects(data))
        .catch((err) => {
            console.log("Error cargando los proyectos\n" + err)
        })
    }, [])
    return (
        <div className="projects">
        <h2 style={{ textShadow: "rgb(255, 0, 217) 1px 0 10px" }}> Mis proyectos mas importantes </h2>
            <Carousel orientation="row" separation={80} scale={0.8} panelMinHeight={325} panelMinWidth={500}> 
                {projects.map((project, index) => (
                    <ProjectCard 
                    key={index} 
                    header={project.header}
                    imgSrc={project.imgSrc}
                    url={project.url}
                    />
                ))}
            </Carousel>
        </div>
    )
}

export { Projects };