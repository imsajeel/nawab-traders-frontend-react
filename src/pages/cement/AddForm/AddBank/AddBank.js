import React, { useState } from "react";
import { url } from "../../../../api/api";

const AddBank = () => {
  const initialValues = {
    title_acc: "",
    name: "",
    branch: "",
    branch_code: "",
    ph: "",
    email: "",
    address: "",
    op_balance: 0,
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

    fetch(`${url}/add/bank`, requestOptions)
      .then((response) => response.json())
      .then((data) => setResponse(data));

    setValues(initialValues);

    setTimeout(() => {
      setResponse({ ...response, initialResponse });
    }, 5000);
  };

  const {
    title_acc,
    name,
    branch,
    branch_code,
    ph,
    email,
    address,
    op_balance,
  } = values;

  return (
    <div>
      <h3 className="centerText">Add Bank</h3>
      <form className="addForm" onSubmit={handleSubmit}>
        <label>Title of Account:*</label>
        <input
          type="text"
          name="title_acc"
          placeholder="Enter Bank Name"
          value={title_acc}
          onChange={handleChange}
          required
        />

        <label>Bank Name:*</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Bank Name"
          value={name}
          onChange={handleChange}
          required
        />

        <label>Branch Name:*</label>
        <input
          type="text"
          name="branch"
          placeholder="Enter Bank Name"
          value={branch}
          onChange={handleChange}
          required
        />

        <label>Branch Code#:</label>
        <input
          type="text"
          name="branch_code"
          placeholder="Enter Bank Name"
          value={branch_code}
          onChange={handleChange}
        />

        <label>Phone#:*</label>
        <input
          type="text"
          name="ph"
          placeholder="Enter phone"
          value={ph}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
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

        <label>Opening Balance:</label>
        <input
          type="number"
          name="op_balance"
          placeholder="Enter balance"
          value={op_balance}
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

export default AddBank;
