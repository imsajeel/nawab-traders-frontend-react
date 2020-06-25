import React from "react";

export default function DataEntryMenu({ setRoute }) {
  return (
    <nav>
      <li onClick={() => setRoute("cash_book")}>Cash Book</li>
      <li onClick={() => setRoute("stock_book")}>Stock Book</li>
      <li onClick={() => setRoute("sales")}>Sales</li>
      <li onClick={() => setRoute("purchase")}>Purchase</li>
    </nav>
  );
}
