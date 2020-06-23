import React from "react";

const HomeBt = ({ button: { id, title, img } }) => {
  return (
    <div className="homeButton">
      <div className="homeBTicon">
        <img src={img} alt={title} />
      </div>
      <div className="homeBTtitle">{title}</div>
    </div>
  );
};

export default HomeBt;
