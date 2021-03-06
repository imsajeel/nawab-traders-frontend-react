import React, { Component } from "react";
import PopUp from "../../components/PopUp/PopUp";
import { url } from "../../../api/api";

class CustomerLedger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchName: "",
      customers: [],
      cust_selection: {},
      popUp: false,
    };
  }
  componentDidMount() {
    fetch(`${url}/customers`)
      .then((res) => res.json())
      .then((customers) => this.setState({ customers }))
      .catch((err) => console.log(err));
  }

  initialState() {
    this.setState({
      searchName: "",
      cust_selection: {},
      popUp: false,
    });
  }

  selectItem(index) {
    this.setState({ cust_selection: this.state.customers[index] });
  }

  hidePopUp() {
    // this.setState({ popUp: false });
    console.log("HIDING");
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { customers, cust_selection, popUp } = this.state;
    return (
      <div>
        <h1>Customer's Ledger</h1>
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

            {customers.map((cust, index) => (
              <tr
                key={index}
                className="item"
                onClick={() => this.selectItem(index)}
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
            ))}
          </table>
        </div>
        <h3 className="green">
          {cust_selection.name
            ? cust_selection.name + " from " + cust_selection.address
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
          <button
            className="primary"
            onClick={() => this.setState({ popUp: true })}
          >
            Preview
          </button>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <button onClick={() => this.initialState()}>Cancel</button>
        </div>
        {popUp ? (
          <PopUp hide={this.hidePopUp} data={cust_selection} />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default CustomerLedger;
