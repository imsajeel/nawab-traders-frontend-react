import React from "react";

export default function Purchase() {
  return (
    <div>
      <h3>Purchase</h3>
      <form className="entryForm">
        <label>StockBook#: (opt)</label>
        <input
          type="text"
          name="stocknum"
          placeholder="Stock# on manual record"
        />

        <label>Brand:</label>
        <select name="brand">
          <option>Select Brand</option>
          <option>Bestway</option>
          <option>Fouji</option>
          <option>Dewan</option>
          <option>Pioneer</option>
          <option>PakCem</option>
        </select>

        <label>Code:</label>
        <select name="code">
          <option>Select Area Code</option>
          <option>MRP</option>
          <option>BHI</option>
          <option>KTL</option>
          <option>JLM</option>
          <option>Add New Code</option>
        </select>

        <label>Price:</label>
        <input type="number" name="price" placeholder="Price per bag" />

        <label>Quantity:</label>
        <input type="number" name="quantity" placeholder="Quantity of bags" />

        <div className="col-2-5">
          <h1>---Selection Box---</h1>
        </div>

        <div className="col-2-5" style={{ textAlign: "right" }}>
          <button className="primary">Add</button>
        </div>

        <div className="col-2-5">
          <h1>---Added Feilds---</h1>
        </div>
        <div className="col-2-5" style={{ textAlign: "right" }}>
          <button className="primary">Post</button>
        </div>
      </form>
    </div>
  );
}
