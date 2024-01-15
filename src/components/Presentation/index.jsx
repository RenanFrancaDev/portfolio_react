import illustration from "../../assets/illustration.jpg";
import "./presentation.css";

const Presentation = () => {
  return (
    <section id="presentation">
      <div className="home_container">
        <h2>Renan França</h2>
        <h3>Full Stack Developer</h3>
        <p>
          I'm a production engineer experienced in the supply chain industry and
          I transitioned to the tech sector and am currently studying Analysis
          and Systems Development at the University of Taubaté, as well as a
          full stack technology program at DNC School. Currently, I provide
          services for a fintech company and also work as a freelance developer.
          <br />
          <br />
          With my engineering background and tech knowledge, I constantly strive
          to enhance my skills and create innovative solutions. I am passionate
          about developing efficient and user-friendly systems that cater to
          companies needs. My experience in the supply chain field, combined
          with my current focus on technology, has given me a well -rounded
          understanding of the development process. I am always ready to tackle
          new challenges and collaborate with others to create impactful
          projects. My ultimate goal is to contribute to organizational success
          by leveraging my technical expertise and problem-solving abilities.
          <br />
          <br />
          Please review my portfolio and feel free to contact me if you have any
          questions.
        </p>
      </div>
      <div className="presentation_img">
        <img
          className="img_presentation"
          src={illustration}
          alt="illustration"
        />
      </div>
    </section>
  );
};

export default Presentation;
