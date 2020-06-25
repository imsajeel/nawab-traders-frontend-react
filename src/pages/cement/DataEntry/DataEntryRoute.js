import React from "react";
import Sales from "./Sales/Sales";
import Purchase from "./Purchase/Purchase";
import CashBook from "./CashBook/CashBook";
import StockBook from "./StockBook/StockBook";

export default function DataEntryRoute({ route }) {
  switch (route) {
    case "sales":
      return <Sales />;
    case "purchase":
      return <Purchase />;
    case "cash_book":
      return <CashBook />;
    case "stock_book":
      return <StockBook />;
    default:
      return <Sales />;
  }
}
