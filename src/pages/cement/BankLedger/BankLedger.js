import React, { useState, useEffect } from "react";
import { url } from "../../../api/api";

const BankLedger = () => {
  const [bankList, setBankList] = useState([]);
  const [bankSelection, setBankSelection] = useState({});
  const [search, setSearch] = useState({});
  const [searchData, setSearchData] = useState([]);

  const fetchBank = () => {
    fetch(`${url}/bank`)
      .then((res) => res.json())
      .then((data) => setBankList(data));
  };

  const handleFilter = () => {
    if (search.searchName) {
      setSearchData(
        bankList.filter((bank) =>
          bank.name.toLowerCase().includes(search.searchName)
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

  useEffect(() => fetchBank());

  // eslint-disable-next-line
  useEffect(() => handleFilter(), [search]);

  const bankTable = (bankData) => {
    return bankData
      ? bankData.map((bank, index) => (
          <tr
            key={index}
            className="item"
            onClick={() => setBankSelection(bank)}
          >
            <td>{bank.bank_id}</td>
            <td>{bank.title_acc}</td>
            <td>{bank.name}</td>
            <td>{bank.ph}</td>
            <td>
              {bank.op_balance < 0 ? bank.op_balance * -1 : bank.op_balance}
            </td>
            <td className={bank.op_balance <= 0 ? "Credit" : "Debit"}>
              {bank.op_balance <= 0 ? "Credit" : "Debit"}
            </td>
          </tr>
        ))
      : "No data found";
  };

  return (
    <div>
      <h1>Bank's Ledger</h1>
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
            <th>Title acc.</th>
            <th>Name/Branch</th>
            <th>Phone#</th>
            <th>Balance</th>
            <th>Dr/Cr</th>
          </tr>
          {searchData[0] ? bankTable(searchData) : bankTable(bankList)}
        </table>
      </div>
      <h3 className="green">
        {bankSelection.name
          ? bankSelection.name + " from " + bankSelection.address
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

export default BankLedger;
