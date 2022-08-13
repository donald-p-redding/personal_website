import React from "react";

function Service({ service: { name, Icon } }) {
  return (
    <div className="service-item text-center">
      <Icon size={50}/>
      <h4 className="my-3">{name}</h4>
    </div>
  );
}

export default Service;
