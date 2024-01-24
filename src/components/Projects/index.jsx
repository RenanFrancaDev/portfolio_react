import "./projects.css";
import { useState, useEffect } from "react";
import { ProjectsService } from "../../api/ProjectsService";
import Card from "../Card";
// import Carousel from "../Carousel";

const Projects = () => {
  const [projects, setprojects] = useState([]);
  const [landing, setlanding] = useState([]);

  const getProjects = async () => {
    let { data } = await ProjectsService.getProjects();
    const newprojects = data.filter((e) => e.type !== "landing");
    const newlanding = data.filter((e) => e.type === "landing");
    setprojects(newprojects);
    setlanding(newlanding);
  };

  useEffect(() => {
    getProjects();
  }, []);
  return (
    <section className="section_card" id="project2">
      <h2 className="title_section">Projects</h2>
      <div>
        <div className="container_card">
          {projects.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
        </div>
        <h2 className="title_section">Landing Page</h2>
        <div className="container_card">
          {landing.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
