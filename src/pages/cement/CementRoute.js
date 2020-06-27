import React from "react";
import CementMenu from "./CementMenu";
import CustomerLedger from "./CustomerLedger/CustomerLedger";
import SupplierLedger from "./SupplierLedger/SupplierLedger";
import StockReport from "./StockReport/StockReport";
import CashBook from "./CashBook/CashBook";
import BankLedger from "./BankLedger/BankLedger";
import Sales from "./Sales/Sales";
import Purchase from "./Purchase/Purchase";
import ExpenseLedger from "./ExpenseLedger/ExpenseLedger";
import Default from "./Default/Default";
import DataEntry from "./DataEntry/DataEntry";
import AddForm from "./AddForm/AddForm";

const CementRoute = ({ route, setRoute }) => {
  switch (route) {
    case "data_entry":
      return <DataEntry />;
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
    case "expense_ledger":
      return <ExpenseLedger />;
    case "add_form":
      return <AddForm />;
    default:
      return <Default />;
    // return <CementMenu setRoute={setRoute} />;
  }
};

export default CementRoute;
