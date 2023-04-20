import React, { useState } from "react";
import CustomerTable from "./CustomerTable";
import {
  totalOrder,
  uniqueCustomers,
} from "../../HelperFunction/HelperFunction";
import Search from "./Search";

const CustomerContainer = (props) => {
  const { customer } = props;
  const [term , setTerm] = useState('')

  const onlyUniqueCustomer = uniqueCustomers(customer);

  const showDetails = (cust) => {
    const customerOrder = customer.filter((c) => c.Phone === cust.Phone);
    const customerTotalOrderAmount = totalOrder(customerOrder);

    alert(`Name - ${cust.Name}
Order Count - ${customerOrder.length}
Order Amount - ${customerTotalOrderAmount}`);
  };

  const handleChange = (e) =>{
    const term = e.target.value
    setTerm(term)
  }

  const filterUniqueCustomer = () =>{
    const result = onlyUniqueCustomer.filter((c)=>{
        return c.Name.toLowerCase().includes(term) || c.Phone.toString().includes(term)
    })
    return result
  }

  return (
    <div className="mt-5">
      <div className="d-flex align-items-center">
        <h2>Listing Customer - {onlyUniqueCustomer.length}</h2>
        <div className="ms-auto">
          <Search term={term} handleChange={handleChange} />
        </div>
      </div>
      <CustomerTable
        tableData={filterUniqueCustomer()}
        showDetails={showDetails}
      />
    </div>
  );
};

export default CustomerContainer;
