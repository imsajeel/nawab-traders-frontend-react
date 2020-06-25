import React from "react";
import AddCust from "./AddCust/AddCust";
import AddBank from "./AddBank/AddBank";
import AddSup from "./AddSup/AddSup";

export default function AddFormRoute({ route }) {
  switch (route) {
    case "add_cust":
      return <AddCust />;
    case "add_bank":
      return <AddBank />;
    case "add_sup":
      return <AddSup />;
    default:
      return <AddCust />;
  }
}
