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
            I began my professional career in the industry as an intern and
            eventually became a buyer, consistently working in Supply Chain. My
            first exposure to development was in 2022 when I started creating
            Landing pages using HTML, CSS, and JavaScript. This experience led
            me to make a career change and pursue IT, where I am currently
            working as a freelancer. I enrolled in a Systems Analysis and
            Development program and have since immersed myself in programming
            studies. Today, I am a full stack developer with expertise in
            React.js, TypeScript, Node.js, Rest API, MySQL, and NoSQL. I am
            eager to continue learning and expanding my knowledge in this field.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
