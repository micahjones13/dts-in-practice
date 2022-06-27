import "./Tooltip.css";

const Tooltip = (props) => {
  return (
    <div
      className={`tooltip-wrapper ${props.hidden ? "hidden" : null}`}
      style={{
        left: `calc(${props.styleX}px + 10px)`,
        top: `calc(${props.styleY}px + 10px)`,
      }}
    >
      <span className="tooltip-msg">{props.msg}</span>
      {props.link ? <a href={props.link}>{props.link}</a> : null}
    </div>
  );
};

export default Tooltip;
