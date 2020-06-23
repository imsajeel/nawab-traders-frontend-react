import React from "react";
import HomeBt from "./HomeBt";
import dbHomeBt from "../../database/dbHomeBt";

const HomeBtList = () => {
  return (
    <div className="homeMenu">
      {dbHomeBt.map((button) => (
        <HomeBt button={button} key={button.id} />
      ))}
    </div>
  );
};

export default HomeBtList;
