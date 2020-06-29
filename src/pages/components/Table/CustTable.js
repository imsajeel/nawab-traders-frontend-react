import React, { useState, useEffect } from "react";
import { url } from "../../../api/api";

export default function TableCust({ setCustSelection }) {
  const [custList, setCustList] = useState([]);
  // const [custSelection, setCustSelection] = useState({});
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

  const custRows = (custData) => {
    return custData
      ? custData.map((cust, index) => (
          <tr
            key={index}
            className="item"
            // onClick={() => setCustSelection(cust)}
          >
            <td>{cust.cust_id}</td>
            <td>{cust.name}</td>
            <td>{cust.shopname}</td>
            <td>
              {cust.ph1}
              <br />
              {cust.ph2}
              <br />
              {cust.ph3}
            </td>
            <td>{cust.address}</td>
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
      <table
        style={{ width: "100%", maxWidth: "1000px" }}
        className="ledgerTable default"
      >
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Shop Name</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Balance</th>
          <th>Db/Cr</th>
        </tr>
        {searchData[0] ? custRows(searchData) : custRows(custList)}
      </table>
    </div>
  );
}
