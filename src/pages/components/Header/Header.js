import React from "react";

const Header = ({ title, home }) => {
  if (home) {
    return (
      <header>
        <div className="pageTitle">Home</div>
      </header>
    );
  } else {
    return (
      <header>
        <div className="pageTitle">
          Dept: <b>{title}</b>
        </div>
      </header>
    );
  }
};

export default Header;
