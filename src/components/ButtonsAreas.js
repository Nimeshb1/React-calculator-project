import React from "react";
import { Buttons } from "./Buttons";

export const ButtonsAreas = ({ handelOnClick }) => {
  const btns = [
    {
      cog: "bote-1",
      name: "AC",
    },
    {
      cog: "bote-2",
      name: "C",
    },
    {
      cog: "bote-3",
      name: "%",
    },
    {
      cog: "bote-4",
      name: "/",
    },
    {
      cog: "bote-5",
      name: "7",
    },
    {
      cog: "bote-6",
      name: "8",
    },
    {
      cog: "bote-7",
      name: "9",
    },
    {
      cog: "bote-8",
      name: "*",
    },
    {
      cog: "bote-9",
      name: "4",
    },
    {
      cog: "bote-10",
      name: "5",
    },
    {
      cog: "bote-11",
      name: "6",
    },
    {
      cog: "bote-12",
      name: "-",
    },
    {
      cog: "bote-13",
      name: "1",
    },
    {
      cog: "bote-14",
      name: "2",
    },
    {
      cog: "bote-15",
      name: "3",
    },
    {
      cog: "bote-16",
      name: "+",
    },
    {
      cog: "bote-17",
      name: "0",
    },
    {
      cog: "bote-18",
      name: ".",
    },
    {
      cog: "bote-19",
      name: "=",
    },
  ];
  return (
    <>
      {btns.map((elm, i) => {
        return (
          <Buttons
            handelOnClick={handelOnClick}
            key={i}
            cog={elm.cog}
            name={elm.name}
          />
        );
      })}
    </>
  );
};
