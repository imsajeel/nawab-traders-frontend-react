import React from "react";
import CementMenu from "./CementMenu";
import CustomerLedger from "./CustomerLedger/CustomerLedger";
import SupplierLedger from "./SupplierLedger/SupplierLedger";
import StockReport from "./StockReport/StockReport";
import CashBook from "./CashBook/CashBook";
import BankLedger from "./BankLedger/BankLedger";
import Sales from "./Sales/Sales";
import Purchase from "./Purchase/Purchase";
import Default from "./Default/Default";

const CementRoute = ({ route, setRoute }) => {
  switch (route) {
    case "CementMenu":
      return <CementMenu />;
    case "cust_ledger":
      return <CustomerLedger />;
    case "supplier_ledger":
      return <SupplierLedger />;
    case "stock_report":
      return <StockReport />;
    case "cash_book":
      return <CashBook />;
    case "bank_ledger":
      return <BankLedger />;
    case "sales":
      return <Sales />;
    case "parchase":
      return <Purchase />;
    default:
      return <Default />;
    // return <CementMenu setRoute={setRoute} />;
  }
};

export default CementRoute;
