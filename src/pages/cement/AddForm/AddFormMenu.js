import React from "react";

export default function AddFormMenu({ setRoute }) {
  return (
    <nav>
      <li onClick={() => setRoute("add_cust")}>Add Customer</li>
      <li onClick={() => setRoute("add_sup")}>Add Supplier</li>
      <li onClick={() => setRoute("add_bank")}>Add Bank</li>
      <li onClick={() => setRoute("add_vehicle")}>Add Vehicle</li>
      <li onClick={() => setRoute("add_code")}>Add Code</li>
    </nav>
  );
}
