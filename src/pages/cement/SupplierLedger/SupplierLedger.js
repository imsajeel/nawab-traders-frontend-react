import React, { Component } from "react";

class SupplierLedger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchName: "",
      suppliers: [],
      sup_selection: {},
    };
  }
  componentDidMount() {
    fetch("http://localhost:3001/customers")
      .then((res) => res.json())
      .then((suppliers) => this.setState({ suppliers }))
      .catch((err) => console.log(err));
  }

  selectItem(index) {
    this.setState({ sup_selection: this.state.suppliers[index] });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { suppliers, sup_selection } = this.state;
    return (
      <div>
        <h1>Supplier's Ledger</h1>
        <div className="searchMenu">
          <input
            type="search"
            className="searchName"
            placeholder="Search by Name"
            name="searchName"
            onChange={this.onChange}
          />
          <input
            type="search"
            className="searchPhone"
            placeholder="Search by Phone Number"
          />
        </div>
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
          {suppliers.map((sup, index) => (
            <tr
              key={index}
              className="item"
              onClick={() => this.selectItem(index)}
            >
              <td>{sup.id_cust}</td>
              <td>{sup.name_cust}</td>
              <td>{sup.address_cust}</td>
              <td>{sup.phone}</td>
              <td>
                {sup.balance_cust < 0
                  ? sup.balance_cust * -1
                  : sup.balance_cust}
              </td>
              <td>{sup.balance_cust < 0 ? "Debit" : "Credit"}</td>
            </tr>
          ))}
        </table>
        <h3>
          {sup_selection.name_cust
            ? sup_selection.name_cust + " from " + sup_selection.address_cust
            : "Please select a row"}
        </h3>
        <div className="calendar">
          <label htmlFor="fromDate">From Date:</label>
          <input
            type="date"
            id="fromDate"
            name="fromDate"
            onChange={this.onChange}
          />
          &nbsp; &nbsp; &nbsp; &nbsp;
          <label htmlFor="toDate">To Date:</label>
          <input
            type="date"
            id="toDate"
            name="toDate"
            onChange={this.onChange}
          />
          <br />
          <br />
          <button className="primary" onClick={() => this.custTable()}>
            Preview
          </button>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <button>Cancel</button>
        </div>
      </div>
    );
  }
}

export default SupplierLedger;
