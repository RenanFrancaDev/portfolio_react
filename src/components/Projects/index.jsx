import "./projects.css";
import Carousel from "../Carousel";

const Projects = () => {
  return (
    <section className="section_card">
      <h2 className="title_section">Projects</h2>
      <h3 className="title_type">Front-End</h3>
      <div className="container_title">
        <img
          className="logo_tech"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          alt="HTML logo"
        ></img>
        <img
          className="logo_tech"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
          alt="CSS logo"
        ></img>
        <img
          className="logo_tech"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="Javascript logo"
        ></img>
        <img
          className="logo_tech"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          alt="React logo"
        ></img>
        <img
          className="logo_tech"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          alt="typescript logo"
        ></img>
        <img
          className="logo_tech"
          src="https://www.cdnlogo.com/logos/s/63/sass.svg"
          alt="sass logo"
        ></img>
        <img
          className="logo_tech"
          src="https://www.cdnlogo.com/logos/t/58/tailwindcss.svg"
          alt="tailwind logo"
        ></img>
        <img
          className="logo_tech"
          src="https://www.cdnlogo.com/logos/n/80/next-js.svg"
          alt="nextJS logo"
        ></img>
      </div>
      <Carousel type={"frontend"} />
      <h3 className="title_type">Back-End | REST API</h3>
      <div className="container_title">
        <img
          className="logo_tech"
          src="https://www.cdnlogo.com/logos/n/94/nodejs-icon.svg"
          alt="node logo"
        ></img>
        <img
          className="logo_tech"
          src="https://www.cdnlogo.com/logos/m/30/mongodb-icon.svg"
          alt="mongoDB logo"
        ></img>
        <img
          className="logo_tech"
          src="https://www.cdnlogo.com/logos/m/10/mysql.svg"
          alt="mySQL logo"
        ></img>
      </div>
      <Carousel type={"backend"} />
      <h3 className="title_type">Landing Page</h3>
      <div className="container_title">
        <img
          className="logo_tech"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          alt="HTML logo"
        ></img>
        <img
          className="logo_tech"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
          alt="CSS logo"
        ></img>
        <img
          className="logo_tech"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="Javascript logo"
        ></img>
      </div>
      <Carousel type={"landing"} />
    </section>
  );
};

export default Projects;
