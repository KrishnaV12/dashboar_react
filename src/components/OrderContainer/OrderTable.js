import React from 'react'

const OrderTable = (props) => {
    const {data} = props
   

   

  return (
    <div className='mt-5'>
      <h2>OrderTable</h2>
      <table className="table table-dark table-striped-columns">
        <thead>
          <tr>
            <th scope="col">Numer Of Orders</th>
            <th scope="col">Count of customers</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((item , index) => {
            return (
              <tr key={index}>
                <td>{item}</td>
                <td>{data[item]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable