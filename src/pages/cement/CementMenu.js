import React from "react";

const CementMenu = ({ setRoute }) => {
  return (
    <div className="container contMenu">
      <div className="cont_title">Cement Menu</div>
      <div className="Menu">
        <li onClick={() => setRoute("cust_ledger")}>Customer's Ledger</li>
        <li onClick={() => setRoute("supplier_ledger")}>Supplier's Ledger</li>
        <li onClick={() => setRoute("stock_report")}>Stock Report</li>
        <li onClick={() => setRoute("cash_book")}>Cash Book</li>
        <li onClick={() => setRoute("bank_ledger")}>Bank's Ledger</li>
        <li onClick={() => setRoute("sales")}>Sales</li>
        <li onClick={() => setRoute("parchase")}>Purchase</li>
      </div>
    </div>
  );
};

export default CementMenu;
