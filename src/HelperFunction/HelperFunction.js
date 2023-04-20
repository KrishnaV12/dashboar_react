// helper functions
let _ = require("lodash");

export const uniqueCustomers = (customer) => {
  const result = _.uniqBy(customer, "Phone");
  return result;
};

export const totalOrder = (customer) => {
  let sum = 0;
  for (let cust of customer) {
    sum += cust.Amount;
  }
  return sum;
};
