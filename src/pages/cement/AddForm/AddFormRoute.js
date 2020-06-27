import React from "react";
import AddCust from "./AddCust/AddCust";
import AddBank from "./AddBank/AddBank";
import AddSup from "./AddSup/AddSup";
import AddVehicle from "./AddVehicle/AddVehicle";
import AddCode from "./AddCode/AddCode";

export default function AddFormRoute({ route }) {
  switch (route) {
    case "add_cust":
      return <AddCust />;
    case "add_bank":
      return <AddBank />;
    case "add_sup":
      return <AddSup />;
    case "add_vehicle":
      return <AddVehicle />;
    case "add_code":
      return <AddCode />;
    default:
      return <AddCust />;
  }
}
