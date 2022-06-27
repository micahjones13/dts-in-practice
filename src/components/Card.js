import "./Card.css";
import Tooltip from "./Tooltip.js";
import { useState } from "react";

const Card = (props) => {
  const [hideTooltip, setHideTooltip] = useState(true);
  const [mouseX, setMouseX] = useState();
  const [mouseY, setMouseY] = useState();

  function handleShowTooltip() {
    setTimeout(() => {
      setHideTooltip(false);
    }, 1000);
  }
  function handleHideoolTip() {
    // setTimeout(() => {
    setHideTooltip(true);
    // }, 1000);
  }
  function handleMouseMove(e) {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  }

  return (
    <div
      onMouseEnter={handleShowTooltip}
      onMouseLeave={handleHideoolTip}
      onMouseMove={(e) => handleMouseMove(e)}
    >
      <div className="card-wrapper">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-content">{props.content}</p>
        <span className="launch-date">{props.launchDate}</span>
        <a href={props.link}>astrouxds.com</a>
      </div>
      <Tooltip
        msg={props.tooltipInfo.msg}
        link={props.tooltipInfo.link}
        hidden={hideTooltip}
        styleY={mouseY}
        styleX={mouseX}
      />
    </div>
  );
};

export default Card;
