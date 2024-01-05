import "./about.css";
import image from "../../assets/about.png";

const About = () => {
  return (
    <section className="about">
      <div className="container_title">
        <h2 className="title">About Me</h2>
      </div>
      <div className="container_about">
        <div>
          <img className="img_about" src={image} alt="image" />
        </div>
        <div className="description">
          <p>
            I started my professional career in the industry, as an intern until
            I became a buyer, always working in Supply Chain. The first time
            that I have contact with development was in 2022, making Landing
            pages with HTML, CSS and JavaScript, when I decided to change my
            career and work with IT, where I am working as a freelancer at the
            moment. I started a degree in Systems Analysis and Development and
            delved deeper into programming studies. Today I am a full stack
            developer, where I took courses and gained knowledge in React.js,
            TypeScript Node.js, Rest API, MySQL, NoSQL and I intend to learn
            more and more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
