import React from "react";

export default function AddSup() {
  return (
    <div>
      <h3 className="centerText">Add Supplier</h3>
      <form className="addForm">
        <label>Supplier Name:</label>
        <input type="text" name="name_sup" placeholder="Enter Bank Name" />

        <label>Address:</label>
        <textarea name="address" placeholder="Enter address" />

        <label>Phone# 1:</label>
        <input type="text" name="phone1" placeholder="Enter phone" />

        <label>Phone# 2:</label>
        <input type="text" name="phone2" placeholder="Enter phone" />

        <label>Phone# 3:</label>
        <input type="text" name="phone3" placeholder="Enter phone" />

        <label>Email:</label>
        <input type="email" name="email" placeholder="Enter email" />

        <label>Opening Balance:</label>
        <input type="number" name="op_balance" placeholder="Enter balance" />

        <label> </label>
        <button className="primary">Add</button>
      </form>
    </div>
  );
}
