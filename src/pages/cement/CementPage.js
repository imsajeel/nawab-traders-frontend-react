import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CementMenu from "./CementMenu";
import CementRoute from "./CementRoute";

export default function CementPage() {
  const [route, setRoute] = useState("data_entry");

  return (
    <div className="App">
      <Header title="Cement" />
      <div className="Page">
        <div className="sideMenu">
          <CementMenu route={route} setRoute={setRoute} />
        </div>
        <div className="pageContent">
          <div className="container">
            <CementRoute route={route} setRoute={setRoute} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
