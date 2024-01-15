import illustration from "../../assets/illustration.jpg";
import "./presentation.css";

const Presentation = () => {
  return (
    <section id="presentation">
      <div className="home_container">
        <h1>Renan França</h1>
        <h3>Full Stack Developer</h3>
        <p>
          Hello, I'm a production engineering with experience in the supply
          chain field. Recently, I transitioned to the technology industry and I
          am currently studying Analysis and Systems Development at the
          University of Taubaté and a full stack technology program at DNC
          School. I am currently providing services for a fintech company and
          also working as a freelance developer. With my engineering background
          and knowledge in technology, I am constantly seeking to improve my
          skills and create innovative solutions. I am passionate about
          developing efficient and user-friendly systems that meet the needs of
          companies. Through my experience in the supply chain field and my
          current focus on technology, I have developed a strong understanding
          of the various aspects of the development process. I am always eager
          to take on new challenges and collaborate with others to create
          impactful projects. My goal is to contribute to the success of
          organizations by leveraging my technical skills and problem-solving
          abilities. Please consider my portfolio and feel free to reach out to
          me with any questions. Thank you! work.
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
