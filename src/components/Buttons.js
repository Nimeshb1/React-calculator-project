import React from "react";

export const Buttons = ({ cog, name, handelOnClick }) => {
  return (
    <>
      <button onClick={() => handelOnClick(name)} className={cog}>
        {name}
      </button>
    </>
  );
};
