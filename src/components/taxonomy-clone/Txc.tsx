import React from "react";
import { shortData, stringData } from "../taxonomy/taxoData";

const Txc: React.FC = () => {
  const obj = {};
  const formatedArr = shortData
    .split("\n")
    .map((item) => item.split(">").map((i) => i.trim()));

  const arrToObj = () => {
    for (let el of formatedArr) {
    }

    function convertToObj(obj: any, arr: any, i = 0) {
      if (i > arr.length - 1) {
        return;
      }
    }
  };

  return <div>Taxonomy Using Recurcive function</div>;
};

export default Txc;
