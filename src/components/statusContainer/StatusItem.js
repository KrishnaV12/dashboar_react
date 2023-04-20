import React from "react";

const StatusItem = (props) => {
  const { count, text } = props;

  return (
    <div>
      <div className="card text-bg-light mb-3" style={{width:400}} >
        <div className="card-header fs-1">{text}</div>
        <div className="card-body">
          <h5 className="card-title fs-2">{count}</h5>
        </div>
      </div>
    </div>
  );
};

export default StatusItem;
