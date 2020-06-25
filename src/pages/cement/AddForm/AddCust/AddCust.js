import React from "react";

export default function AddCust() {
  return (
    <div>
      <h3 className="centerText">Add Customer</h3>
      <form className="addForm">
        <label>Name:</label>
        <input
          type="text"
          name="name_cust"
          placeholder="Enter Customer's Name"
        />

        <label>Shop Name:</label>
        <input type="text" name="name_shop" placeholder="Enter Shop Name" />

        <label>ID CARD#:</label>
        <input type="text" name="id_cust" placeholder="Enter ID CARD" />

        <label>NTN#:</label>
        <input type="text" name="ntn_cust" placeholder="Enter NTN" />

        <label>Address:</label>
        <textarea name="address" placeholder="Enter address" />

        <label>Phone# 1:</label>
        <input type="text" name="phone1" placeholder="Enter phone" />

        <label>Phone# 2:</label>
        <input type="text" name="phone2" placeholder="Enter phone" />

        <label>Phone# 3:</label>
        <input type="text" name="phone3" placeholder="Enter phone" />

        <label>Opening Balance:</label>
        <input type="number" name="op_balance" placeholder="Enter balance" />

        <label>Comments:</label>
        <textarea name="comments" placeholder="Enter Comments" />

        <label> </label>
        <button className="primary">Add</button>
      </form>
    </div>
  );
}
