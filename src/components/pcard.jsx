import React from "react";

const Pcard = ({ projectDataTo }) => {
  return (
    
      <div className="pcard">
        <div className="pcard-top">
          <img src={projectDataTo.imglink} alt="" />
        </div>
        <div className="pcard-bot">
          <h5>{projectDataTo.name}</h5>
          <p>{projectDataTo.info}</p>
          <button>
            <a href={projectDataTo.plink}target="_blank">Demo</a>{" "}
          </button>
          <button>
            <a href={projectDataTo.sourceCode}target="_blank">Source</a>{" "}
          </button>
        </div>
      </div>
    
  );
};

export default Pcard;
