import "./footer.css";
import logoGithub from "../../assets/github-logo.png";
import logoEmail from "../../assets/email.png";
import logoLinkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container-title">
        <h2 className="title-contact">Contact</h2>
      </div>

      <div className="container-icon">
        <div className="icon">
          <a className="contact-link" href="mailto:renanfranca.dev@gmail.com">
            <div className="logo">
              <img className="img-logo" src={logoEmail} alt="email" />
              <h3 className="subtitle-contact">Email</h3>
              <p className="text-contact">renanfranca.dev@gmail.com</p>
            </div>
          </a>
        </div>

        <div className="icon">
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/renan-franca/"
          >
            <div className="logo">
              <img
                className="img-logo"
                src={logoLinkedin}
                alt="linkedin-logo"
              />
              <h3 className="subtitle-contact">Linkedin</h3>
              <p className="text-contact">Renan França</p>
            </div>
          </a>
        </div>

        <div className="icon">
          <a className="contact-link" href="https://github.com/RenanFrancaDev">
            <div className="logo">
              <img className="img-logo" src={logoGithub} alt="logo github" />
              <h3 className="subtitle-contact">GitHub</h3>
              <p className="text-contact">@RenanFrancaDev</p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
