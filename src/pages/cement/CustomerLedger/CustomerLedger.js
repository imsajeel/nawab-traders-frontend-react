import React, { useEffect, useState } from "react";
import { url } from "../../../api/api";

const CustomerLedger = () => {
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
      if (search.searchName !== "") {
        setSearchData(
          custList.filter((cust) =>
            cust.name.toLowerCase().includes(search.searchName)
          )
        );
      }
    } else if (search.searchPhone) {
      setSearchData(
        custList.filter((cust) =>
          cust.ph1.toLowerCase().includes(search.searchPhone)
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
          {searchData[0] ? custTable(searchData) : custTable(custList)}
        </table>
      </div>
      <h3 className="green">
        {custSelection.name
          ? custSelection.name + " from " + custSelection.address
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
