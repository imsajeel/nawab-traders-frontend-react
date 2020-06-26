import React, { useState } from "react";
import { url } from "../../../../api/api";

const AddSup = () => {
  const initialValues = {
    name: "",
    address: "",
    ph1: "",
    ph2: "",
    ph3: "",
    email_sup: "",
    op_balance: 0,
    comment: "",
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

    fetch(`${url}/add/supplier`, requestOptions)
      .then((response) => response.json())
      .then((data) => setResponse(data));

    setValues(initialValues);

    setTimeout(() => {
      setResponse({ ...response, initialResponse });
    }, 5000);
  };

  const {
    name,
    address,
    ph1,
    ph2,
    ph3,
    email_sup,
    op_balance,
    comment,
  } = values;

  return (
    <div>
      <h3 className="centerText">Add Supplier</h3>
      <form className="addForm" onSubmit={handleSubmit}>
        <label>Supplier Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Bank Name"
          value={name}
          onChange={handleChange}
        />

        <label>Address:</label>
        <textarea
          name="address"
          placeholder="Enter address"
          value={address}
          onChange={handleChange}
        />

        <label>Phone# 1:</label>
        <input
          type="text"
          name="ph1"
          placeholder="Enter phone"
          value={ph1}
          onChange={handleChange}
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

        <label>Email:</label>
        <input
          type="email"
          name="email_sup"
          placeholder="Enter email"
          value={email_sup}
          onChange={handleChange}
        />

        <label>Opening Balance:</label>
        <input
          type="number"
          name="op_balance"
          placeholder="Enter balance"
          value={op_balance}
          onChange={handleChange}
        />

        <label>Comments:</label>
        <textarea
          name="comment"
          placeholder="Enter Comments"
          value={comment}
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
};

export default AddSup;
