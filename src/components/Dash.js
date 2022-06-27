import { data as dataImport } from "../assets/data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "./Card";
import "./Dash.css";

const Dash = () => {
  const [data, setData] = useState([...dataImport]);
  let navigate = useNavigate();

  return (
    <div className="dash-wrapper">
      {console.log(data, "data from useStaet")}
      {data.map((item) => {
        console.log(item.link);
        return (
          <Card
            key={item.title}
            title={item.title}
            content={item.content}
            launchDate={item.launchDate}
            link={item.link}
            tooltipInfo={item.tooltip}
          />
        );
      })}
      <div className="btn-wrapper">
        <button
          onClick={() => {
            navigate("/login");
          }}
          id="back-btn"
        >
          Back
        </button>
        <button
          onClick={() => {
            navigate("/table");
          }}
          id="to-table"
        >
          To Table
        </button>
      </div>
    </div>
  );
};

export default Dash;
