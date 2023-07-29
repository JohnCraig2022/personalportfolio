import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import comingSoon from "../public/img/projects/comingSoon.jpg";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={comingSoon.src}
          title="Coming Soon"
          link="https://www.google.com"
        />
        <ProjectCard
          img={comingSoon.src}
          title="Coming Soon"
          link="https://www.google.com"
        />
        <ProjectCard
          img={comingSoon.src}
          title="Coming Soon"
          link="https://www.google.com"
        />
        <ProjectCard
          img={comingSoon.src}
          title="Coming Soon"
          link="https://www.google.com"
        />
        <ProjectCard
          img={comingSoon.src}
          title="Coming Soon"
          link="https://www.google.com"
        />
        <ProjectCard
          img={comingSoon.src}
          title="Coming Soon"
          link="https://www.google.com"
        />
      </div>
    </div>
  );
};

export default Projects;
