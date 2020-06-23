import React, { useState } from "react";
import CementMenu from "./CementMenu";
import CustomerLedger from "./CustomerLedger/CustomerLedger";
import SupplierLedger from "./SupplierLedger/SupplierLedger";
import StockReport from "./StockReport/StockReport";
import CashBook from "./CashBook/CashBook";
import BankLedger from "./BankLedger/BankLedger";
import Sales from "./Sales/Sales";
import Purchase from "./Purchase/Purchase";

const Cement = () => {
  const [route, setRoute] = useState("CementMenu");
  switch (route) {
    case "CementMenu":
      return <CementMenu setRoute={setRoute} />;
    case "cust_ledger":
      return <CustomerLedger setRoute={setRoute} />;
    case "supplier_ledger":
      return <SupplierLedger setRoute={setRoute} />;
    case "stock_report":
      return <StockReport setRoute={setRoute} />;
    case "cash_book":
      return <CashBook setRoute={setRoute} />;
    case "bank_ledger":
      return <BankLedger setRoute={setRoute} />;
    case "sales":
      return <Sales setRoute={setRoute} />;
    case "purchase":
      return <Purchase setRoute={setRoute} />;
    default:
      return <CementMenu setRoute={setRoute} />;
  }
};

export default Cement;
