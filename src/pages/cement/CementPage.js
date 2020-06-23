import React, { useState } from "react";
import Header from "../components/Header/Header";
import CementMenu from "./CementMenu";
import CementRoute from "./CementRoute";

export default function CementPage() {
  const [route, setRoute] = useState("");
  return (
    <div>
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
    </div>
  );
}
