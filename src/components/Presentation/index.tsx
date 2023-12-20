import React from "react";
import illustration from "../../assets/illustration.jpg";
import "./presentation.css";

const Presentation = () => {
  return (
    <section id="home">
      <div className="home_container">
        <h1>Renan França</h1>
        <h2>Full Stack Developer</h2>
        <p>
          Graduated in Manufacturing Engineering, with experience in the Supply
          Chain area, I migrated to a technology career. I'm studying Systems
          Analysis and Development at the Universidade de Taubaté and studying
          Full Stack Technology at the DNC school. I have freelance and academic
          work.
        </p>
      </div>
      <div>
        <img
          className="programation"
          src={illustration}
          alt="illustration"
          width={500}
        />
      </div>
    </section>
  );
};

export default Presentation;
