import "./card.css";
import logoGithub from "../../assets/github-logo.png";
import logoWorld from "../../assets/world.png";

const Card = ({ item }) => {
  return (
    <div className="container">
      <div className="container_img">
        <img className="img_card" src={item.imageUrl} alt={item.title} />
        <h3 className="project_title">{item.title}</h3>
        <div className="container_info">
          <h4 className="project_title_info">{item.title}</h4>
          <p className="project_description">
            <b>Description:</b> {item.description}
          </p>
          <div className="project_techs">
            <h5 className="title_techs">Techs:</h5>
            {item.techs.map((e, index) => {
              return (
                <p className="techs" key={index}>
                  {e}
                </p>
              );
            })}
          </div>
          <div className="project_links">
            <h5 className="title_techs">Links:</h5>
            <a href={item.repository} target="_blank" rel="noreferrer">
              <img
                className="card_icon"
                src={logoGithub}
                alt="logo github"
              ></img>
            </a>
            <a href={item.repository} target="_blank" rel="noreferrer">
              <img
                className="card_icon"
                src={logoWorld}
                alt="logo github"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
