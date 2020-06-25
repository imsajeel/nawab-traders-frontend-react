import React from "react";

export default function AddCust() {
  // const [data, setData] = useState({
  //   name: "",
  //   nameShop: "",
  //   idCard: "",
  //   ntn: "",
  //   address: "",
  //   ph1: "",
  //   ph2: "",
  //   ph3: "",
  //   opBalance:"",
  //   comments: "",
  // });

  // const onChangeName = (e) => {
  //   setData({ [e.target.name]: e.target.value });
  //   console.log(data);
  // };

  return (
    <div>
      <h3 className="centerText">Add Customer</h3>
      <form className="addForm">
        <label>Name:</label>
        <input type="text" name="name" placeholder="Enter Customer's Name" />

        <label>Shop Name:</label>
        <input type="text" name="nameShop" placeholder="Enter Shop Name" />

        <label>ID CARD#:</label>
        <input type="text" name="idCard" placeholder="Enter ID CARD" />

        <label>NTN#:</label>
        <input type="text" name="ntn" placeholder="Enter NTN" />

        <label>Address:</label>
        <textarea name="address" placeholder="Enter address" />

        <label>Phone# 1:</label>
        <input type="text" name="ph1" placeholder="Enter phone" />

        <label>Phone# 2:</label>
        <input type="text" name="ph2" placeholder="Enter phone" />

        <label>Phone# 3:</label>
        <input type="text" name="ph3" placeholder="Enter phone" />

        <label>Opening Balance:</label>
        <input type="number" name="opBalance" placeholder="Enter balance" />

        <label>Comments:</label>
        <textarea name="comments" placeholder="Enter Comments" />

        <label> </label>
        <button className="primary">Add</button>
      </form>
    </div>
  );
}
