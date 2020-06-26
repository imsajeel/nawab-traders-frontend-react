import React, { useState } from "react";
import AddFormMenu from "./AddFormMenu";
import AddFormRoute from "./AddFormRoute";

export default function AddForm() {
  const [formRoute, setFormRoute] = useState("add_sup");
  return (
    <div>
      <h1>Add Form</h1>
      <AddFormMenu setRoute={setFormRoute} />
      <div>
        <AddFormRoute route={formRoute} />
      </div>
    </div>
  );
}
