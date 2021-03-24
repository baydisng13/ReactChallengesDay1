import React from "react";

function Data({ title, data }) {
  return (
    <div>
      <strong>{title}</strong>
      <span>{data}</span>
    </div>
  );
}

export default Data;
