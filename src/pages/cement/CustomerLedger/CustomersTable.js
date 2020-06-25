import React from "react";

export default function CustomersTable() {
  return (
    <div>
      <table
        style={{ width: "100%", maxWidth: "1000px" }}
        className="ledgerTable"
      >
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Address</th>
          <th>Balance</th>
          <th>Phone#</th>
          <th>Dr/Cr</th>
        </tr>
      </table>
    </div>
  );
}
