import React from "react";
import HomeBtList from "./HomeBtList";
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <div className="Page">
      <Header home />
      <div className="content">
        <HomeBtList />
      </div>
    </div>
  );
};

export default Home;
