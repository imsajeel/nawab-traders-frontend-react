import React, { useState, useEffect } from "react";
import SelectSearch from "react-select-search";
import { url } from "../../../../api/api";

export default function Sales() {
  const [custList, setCustList] = useState([]);
  const [custSelection, setCustSelection] = useState({});
  const [search, setSearch] = useState({});
  const [searchData, setSearchData] = useState([]);

  const fetchCust = () => {
    fetch(`${url}/customers`)
      .then((res) => res.json())
      .then((data) => setCustList(data));
  };

  const handleFilter = () => {
    if (search.searchName) {
      setSearchData(
        custList.filter((cust) =>
          cust.name.toLowerCase().includes(search.searchName)
        )
      );
    }
  };

  const handleSearchChange = (event) => {
    const {
      target: { name, value },
    } = event;
    event.persist();
    setSearch({ [name]: value.toLowerCase() });
  };

  useEffect(() => fetchCust());

  // eslint-disable-next-line
  useEffect(() => handleFilter(), [search]);

  const custTable = (custData) => {
    return custData
      ? custData.map((cust, index) => (
          <tr
            key={index}
            className="item"
            onClick={() => setCustSelection(cust)}
          >
            <td>{cust.cust_id}</td>
            <td>{cust.name}</td>
            <td>{cust.address}</td>
            <td>
              {cust.ph1}
              <br />
              {cust.ph2}
              <br />
              {cust.ph3}
            </td>
            <td>{cust.balance < 0 ? cust.balance * -1 : cust.balance}</td>
            <td className={cust.balance <= 0 ? "Credit" : "Debit"}>
              {cust.balance <= 0 ? "Credit" : "Debit"}
            </td>
          </tr>
        ))
      : "No data found";
  };

  const options = [
    { name: "Swedish", value: "sv" },
    { name: "English", value: "en" },
  ];

  return (
    <div>
      <h3>Sales</h3>
      <form className="entryForm">
        <label>Select Customer:</label>
        <div className="col-2-5" style={{ marginBottom: "30px" }}>
          <div className="searchMenu">
            <input
              type="search"
              className="searchName"
              placeholder="Search by Name"
              name="searchName"
              onChange={handleSearchChange}
            />
            <button onClick={() => setSearchData([])}>Reset Search</button>
          </div>
          <div className="boxTable">
            <table
              style={{ width: "100%", maxWidth: "1000px" }}
              className="ledgerTable default"
            >
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone#</th>
                <th>Balance</th>
                <th>Dr/Cr</th>
              </tr>
              {searchData[0] ? custTable(searchData) : custTable(custList)}
            </table>
          </div>
          <h3 className="green">
            {custSelection.name
              ? custSelection.name + " from " + custSelection.address
              : "Please select a row"}
          </h3>
        </div>

        <label>Brand:*</label>
        <select name="brand">
          <option>Select Brand</option>
          <option>Bestway</option>
          <option>Fouji</option>
          <option>Dewan</option>
          <option>Pioneer</option>
          <option>PakCem</option>
        </select>

        <label>Rate:*</label>
        <input type="text" name="rate" placeholder="Price per bag" />

        <label>Quantity:*</label>
        <input type="text" name="quantity" placeholder="Quantity of bags" />

        <label>Freight:*</label>
        <input type="text" name="freight" placeholder="Freight" />

        <label>Vehicle#:*</label>
        <div>
          <input type="text" name="vehicle" placeholder="Vehicle Number" />
          <button style={{ marginLeft: "20px" }}>Add New Vehicle</button>
        </div>

        <label>Test</label>
        <SelectSearch
          options={options}
          value="sv"
          name="language"
          placeholder="Choose your language"
          search={true}
          onChange={() => console.log("hdska")}
        />

        <div className="col-2-5" style={{ textAlign: "right" }}>
          <button className="primary">Add</button>
        </div>

        <label>Added Customer:</label>
        <div className="col-2-5">
          <h1>---Added Customers---</h1>
        </div>

        <div className="col-2-5" style={{ textAlign: "right" }}>
          <button className="primary">Post / Save Changes</button>
        </div>
      </form>
    </div>
  );
}
