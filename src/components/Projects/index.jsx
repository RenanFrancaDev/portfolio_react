import { useEffect, useState } from "react";
import { ProjectsService } from "../../api/ProjectsService";
import "./projects.css";
import Card from "../Card";

const Projects = () => {
  const [landing, setLanding] = useState([]);

  const getProjects = async () => {
    let { data } = await ProjectsService.getProjects();

    data.map((e) => {
      if (e.type === "landing") {
        return setLanding([e]);
      }
    });
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <section>
      <h1>Projects</h1>
      {landing.map((item, index) => {
        console.log(item, "item");
        return <Card key={index} item={item} />;
      })}
    </section>
  );
};

export default Projects;
