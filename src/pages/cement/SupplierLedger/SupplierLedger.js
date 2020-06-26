import React, { useEffect, useState } from "react";
import { url } from "../../../api/api";

const CustomerLedger = () => {
  const [supList, setSupList] = useState([]);
  const [supSelection, setSupSelection] = useState({});
  const [search, setSearch] = useState({});
  const [searchData, setSearchData] = useState([]);

  const fetchSup = () => {
    fetch(`${url}/suppliers`)
      .then((res) => res.json())
      .then((data) => setSupList(data));
  };

  const handleFilter = () => {
    if (search.searchName) {
      if (search.searchName !== "") {
        setSearchData(
          supList.filter((sup) =>
            sup.name.toLowerCase().includes(search.searchName)
          )
        );
      }
    } else if (search.searchPhone) {
      setSearchData(
        supList.filter((sup) =>
          sup.ph1.toLowerCase().includes(search.searchPhone)
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

  useEffect(() => fetchSup());

  // eslint-disable-next-line
  useEffect(() => handleFilter(), [search]);

  const supTable = (supData) => {
    return supData
      ? supData.map((sup, index) => (
          <tr key={index} className="item" onClick={() => setSupSelection(sup)}>
            <td>{sup.sup_id}</td>
            <td>{sup.name}</td>
            <td>{sup.address}</td>
            <td>
              {sup.ph1}
              <br />
              {sup.ph2}
              <br />
              {sup.ph3}
            </td>
            <td>{sup.op_balance < 0 ? sup.op_balance * -1 : sup.op_balance}</td>
            <td className={sup.op_balance <= 0 ? "Credit" : "Debit"}>
              {sup.op_balance <= 0 ? "Credit" : "Debit"}
            </td>
          </tr>
        ))
      : "No data found";
  };

  return (
    <div>
      <h1>Customer's Ledger</h1>
      <div className="searchMenu">
        <input
          type="search"
          className="searchName"
          placeholder="Search by Name"
          name="searchName"
          onChange={handleSearchChange}
        />
        <input
          type="search"
          className="searchPhone"
          placeholder="Search by Phone Number"
          name="searchPhone"
          onChange={handleSearchChange}
        />
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
          {searchData[0] ? supTable(searchData) : supTable(supList)}
        </table>
      </div>
      <h3 className="green">
        {supSelection.name
          ? supSelection.name + " from " + supSelection.address
          : "Please select a row"}
      </h3>
      <div className="calendar">
        <label htmlFor="fromDate">From Date:</label>
        <input type="date" id="fromDate" name="fromDate" />
        &nbsp; &nbsp; &nbsp; &nbsp;
        <label htmlFor="toDate">To Date:</label>
        <input type="date" id="toDate" name="toDate" />
        <br />
        <br />
        <button className="primary">Preview</button>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default CustomerLedger;
