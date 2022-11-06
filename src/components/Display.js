import React from "react";

export const Display = ({ str }) => {
  return <div className="screen">{str || "0.00"} </div>;
};
