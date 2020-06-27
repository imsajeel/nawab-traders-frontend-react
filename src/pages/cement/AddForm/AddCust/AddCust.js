import React, { useState } from "react";
import { url } from "../../../../api/api";

export default function AddCust() {
  const initialValues = {
    name: "",
    shopname: "",
    idcard: "",
    ntn: "",
    address: "",
    ph1: "",
    ph2: "",
    ph3: "",
    balance: 0,
    comments: "",
  };

  const initialResponse = {
    status: "",
    message: "",
    payload: {},
  };

  const [values, setValues] = useState(initialValues);
  const [response, setResponse] = useState(initialResponse);

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    event.persist();
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    fetch(`${url}/add/customer`, requestOptions)
      .then((response) => response.json())
      .then((data) => setResponse(data));

    setValues(initialValues);

    setTimeout(() => {
      setResponse({ ...response, initialResponse });
    }, 5000);
  };

  const {
    name,
    shopname,
    idcard,
    ntn,
    address,
    ph1,
    ph2,
    ph3,
    balance,
    comments,
  } = values;

  return (
    <div>
      <h3 className="centerText">Add Customer</h3>
      <form className="addForm" onSubmit={handleSubmit}>
        <label>Name:*</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Customer's Name"
          value={name}
          onChange={handleChange}
          required
        />
        <label>Shop Name:*</label>
        <input
          type="text"
          name="shopname"
          placeholder="Enter Shop Name"
          value={shopname}
          onChange={handleChange}
          required
        />

        <label>ID CARD#:</label>
        <input
          type="text"
          name="idcard"
          placeholder="Enter ID CARD"
          value={idcard}
          onChange={handleChange}
        />

        <label>NTN#:</label>
        <input
          type="text"
          name="ntn"
          value={ntn}
          placeholder="Enter NTN"
          onChange={handleChange}
        />

        <label>Address:*</label>
        <textarea
          name="address"
          placeholder="Enter address"
          value={address}
          onChange={handleChange}
          required
        />

        <label>Phone# 1:*</label>
        <input
          type="text"
          name="ph1"
          placeholder="Enter phone"
          value={ph1}
          onChange={handleChange}
          required
        />

        <label>Phone# 2:</label>
        <input
          type="text"
          name="ph2"
          placeholder="Enter phone"
          value={ph2}
          onChange={handleChange}
        />

        <label>Phone# 3:</label>
        <input
          type="text"
          name="ph3"
          placeholder="Enter phone"
          value={ph3}
          onChange={handleChange}
        />

        <label>Opening Balance:</label>
        <input
          type="number"
          name="balance"
          placeholder="Enter balance"
          value={balance}
          onChange={handleChange}
        />

        <label>Comments:</label>
        <textarea
          name="comments"
          placeholder="Enter Comments"
          value={comments}
          onChange={handleChange}
        />

        <label> </label>
        <div style={{ marginLeft: "auto" }}>
          <label
            style={
              response.status === "success"
                ? { color: "green", marginRight: "20px" }
                : { color: "red", marginRight: "20px" }
            }
          >
            {response.message}
          </label>
          <button type="submit" className="primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
