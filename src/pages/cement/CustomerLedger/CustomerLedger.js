import React from "react";

const CustomerLedger = ({ setRoute }) => {
  return (
    <div>
      <h1 onClick={() => setRoute("CementMenu")}>{" < "}Main Menu</h1>
    </div>
  );
};

export default CustomerLedger;
