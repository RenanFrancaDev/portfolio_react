import "./about.css";
import image from "../../assets/about.png";

const About = () => {
  return (
    <section className="about" id="about2">
      <div className="container_title">
        <h2 className="title">About Me</h2>
      </div>
      <div className="container_about">
        <div className="container_img_about">
          <img className="img_about" src={image} alt="image" />
        </div>
        <div className="description">
          <p>
            I started my professional journey in the industry as an intern and
            gradually worked my way up to becoming a buyer, consistently
            focusing on Supply Chain. In 2022, I had my first encounter with
            development when I began creating Landing pages using HTML, CSS, and
            JavaScript. This experience sparked a passion for IT, leading me to
            make a career transition and pursue freelancing in the field. I
            started a degree in Systems Analysis and Development and have since
            fully immersed myself in studying programming. Today, I am a full
            stack developer with expertise in React.js, TypeScript, Node.js,
            Rest API, MySQL, and NoSQL. I am driven by a strong desire to
            continuously learn and expand my knowledge in this dynamic field.
            <br />
            <br /> Let me know if there is anything else I can assist you with!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
