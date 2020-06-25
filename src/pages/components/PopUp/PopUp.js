import React from "react";

export default function PopUp({
  hide,
  data: { name_cust, address_cust, phone, balance_cust },
}) {
  return (
    <div className="PopUpBack">
      <div className="container PopUp_cont">
        <h1>
          {name_cust
            ? `${name_cust} from ${address_cust} whos phone number is ${phone} and have ${
                balance_cust < 0 ? balance_cust * -1 : balance_cust
              } ${balance_cust < 0 ? "Credit" : "Debit"}.`
            : "Not Selected"}
        </h1>
        <button onClick={() => hide()}>Close</button>
      </div>
    </div>
  );
}
