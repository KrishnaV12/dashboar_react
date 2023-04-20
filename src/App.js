import { useState } from "react";
import "./App.css";
import customerData from "./customerData.json";
import StatusContainer from "./components/statusContainer/StatusContainer";
import CustomerContainer from "./components/CustomerContainer/CustomerContainer";
import OrderContainer from "./components/OrderContainer/OrderContainer";
function App() {
  const [customer, setCustomer] = useState( customerData );

  // console.log(customer);

  return (
    <div className="App container">
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <h3>Customer Dashboard</h3>
          <a class="navbar-brand" href="#">
            <img
              src="/logo512.png"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top"
            />
          </a>
        </div>
      </nav>
      <StatusContainer customer={customer} />
      <CustomerContainer customer={customer} />
      <OrderContainer customer={customer} />
    </div>
  );
}

export default App;
