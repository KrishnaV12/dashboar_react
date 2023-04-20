import React from 'react'
import OrderTable from './OrderTable'
import { uniqueCustomers } from '../../HelperFunction/HelperFunction'
import  OrderChart  from './OrderChart'

const OrderContainer = (props) => {

    const {customer} = props
   
    const customerFrequency =() =>{
    const customerData = uniqueCustomers(customer);
    const frequencyObject = { 1: 0, 2: 0, 3: 0, 4: 0, "5+": 0 };


    customerData.forEach((cust)=>{
        const customerOrder = customer.filter((c)=>{
            return c.Phone === cust.Phone
        })

        // console.log(customerOrder , 'ccc');

        if(customerOrder.length >= 5){
            frequencyObject['5+']++
        }else{
            frequencyObject[customerOrder.length]++
        }

    })
    return frequencyObject
    }




  return (
    <div className='mt-5'>
      <h2>Order Distribution</h2>
      <div className="d-flex">
        <OrderTable data={customerFrequency()} />
        <OrderChart data={customerFrequency()} />
      </div>
    </div>
  );
}

export default OrderContainer