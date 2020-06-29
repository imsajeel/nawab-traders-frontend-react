import React, { useState } from "react";
import DataEntryMenu from "./DataEntryMenu";
import DataEntryRoute from "./DataEntryRoute";

export default function DataEntry() {
  const [dataRoute, setDataRoute] = useState("sales");
  return (
    <div>
      <h1>Data Entry</h1>
      <DataEntryMenu setRoute={setDataRoute} />
      <div>
        <DataEntryRoute route={dataRoute} />
      </div>
    </div>
  );
}
