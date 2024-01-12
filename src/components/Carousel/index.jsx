import Card from "../Card";
import { useEffect, useState, useRef } from "react";
import { ProjectsService } from "../../api/ProjectsService";
import arrowIcon from "../../assets/chevron_icon.png";
import "./carousel.css";

const Carousel = ({ type }) => {
  const [projects, setprojects] = useState([]);
  const intervalRef = useRef(null);

  const carousel = useRef(null);

  const handleLeftClick = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = () => {
    if (carousel.current) {
      carousel.current.scrollLeft += 100;
    }
  };

  const getProjects = async () => {
    let { data } = await ProjectsService.getProjects();
    const newprojects = data.filter((e) => e.type === type);
    setprojects(newprojects);
  };

  useEffect(() => {
    getProjects();

    intervalRef.current = setInterval(() => {
      handleRightClick();
    }, 2000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="container_carousel">
      <div className="container_card" ref={carousel}>
        {projects.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </div>
      <button className="btns" id="left_btn" onClick={handleLeftClick}>
        <img className="left_arrow" src={arrowIcon} alt="Scroll Left" />
      </button>
      <button className="btns" id="right_btn" onClick={handleRightClick}>
        <img className="right_arrow" src={arrowIcon} alt="Scroll Right" />
      </button>
    </div>
  );
};

export default Carousel;
