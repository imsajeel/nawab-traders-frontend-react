import React, { useState } from "react";
import { url } from "../../../../api/api";

export default function AddCode() {
  const initialValues = {
    code: "",
    area_name: "",
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

    fetch(`${url}/add/code`, requestOptions)
      .then((response) => response.json())
      .then((data) => setResponse(data));

    setValues(initialValues);

    setTimeout(() => {
      setResponse({ ...response, initialResponse });
    }, 5000);
  };

  const { area_name, code } = values;

  return (
    <div>
      <h3 className="centerText">Add City Codes</h3>
      <form className="addForm" onSubmit={handleSubmit}>
        <label>Code:*</label>
        <input
          type="text"
          name="code"
          placeholder="Enter city code"
          value={code}
          onChange={handleChange}
          required
        />

        <label>City Name:*</label>
        <input
          type="text"
          name="area_name"
          placeholder="Enter city name"
          value={area_name}
          onChange={handleChange}
          required
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
