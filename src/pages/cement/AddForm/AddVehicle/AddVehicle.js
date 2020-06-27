import React, { useState } from "react";
import { url } from "../../../../api/api";

export default function AddVehicle() {
  const initialValues = {
    reg_number: "",
    active: true,
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

    fetch(`${url}/add/vehicle`, requestOptions)
      .then((response) => response.json())
      .then((data) => setResponse(data));

    setValues(initialValues);

    setTimeout(() => {
      setResponse({ ...response, initialResponse });
    }, 5000);
  };

  const { reg_number, active } = values;
  return (
    <div>
      <h3 className="centerText">Add Vehicle</h3>
      <form className="addForm" onSubmit={handleSubmit}>
        <label>Reg. Number:*</label>
        <input
          type="text"
          name="reg_number"
          placeholder="Enter city code"
          value={reg_number}
          onChange={handleChange}
          required
        />

        <label>Active</label>
        <input
          type="checkbox"
          name="active"
          placeholder="Enter city name"
          value={active}
          onChange={handleChange}
          checked
          disabled
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
