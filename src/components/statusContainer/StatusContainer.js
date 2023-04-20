import React from "react";
import StatusItem from "./StatusItem";
import {totalOrder, uniqueCustomers} from "../../HelperFunction/HelperFunction"

const StatusContainer = (props) => {
  const { customer } = props;
  const orderCount = customer.length;




  return (
    <div className="d-flex justify-content-between mt-5">
      <StatusItem count={orderCount} text="Orders" />
      <StatusItem count={totalOrder(customer)} text="Amount" />
      <StatusItem count={uniqueCustomers(customer).length} text="Customers " />
    </div>
  );
};

export default StatusContainer;
