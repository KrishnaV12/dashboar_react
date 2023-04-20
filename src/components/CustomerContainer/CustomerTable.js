import React from "react";

const CustomerTable = (props) => {
  const { tableData , showDetails } = props;
//   console.log(tableData);



  return (
    <div>
      <h3>CustomerTable</h3>
      <table className="table table-dark table-striped-columns">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, key) => {
            return (
              <tr key={item.Phone}>
                <td>{item.Name}</td>
                <td>{item.Phone}</td>
                <td>
                  <button onClick={() => showDetails(item)} className="rounded">
                    Show
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
