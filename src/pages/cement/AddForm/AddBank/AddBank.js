import React from "react";

export default function AddBank() {
  return (
    <div>
      <h3 className="centerText">Add Bank</h3>
      <form className="addForm">
        <label>Title of Account:</label>
        <input type="text" name="name_bank" placeholder="Enter Bank Name" />

        <label>Bank Name:</label>
        <input type="text" name="name_bank" placeholder="Enter Bank Name" />

        <label>Branch Name:</label>
        <input type="text" name="name_bank" placeholder="Enter Bank Name" />

        <label>Branch Code#:</label>
        <input type="text" name="name_bank" placeholder="Enter Bank Name" />

        <label>Phone#:</label>
        <input type="text" name="phone1" placeholder="Enter phone" />

        <label>Email:</label>
        <input type="email" name="email" placeholder="Enter email" />

        <label>Address:</label>
        <textarea name="address" placeholder="Enter address" />

        <label> </label>
        <button className="primary">Add</button>
      </form>
    </div>
  );
}
