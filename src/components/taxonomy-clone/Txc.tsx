import React from "react";
import { shortData } from "../taxonomy/taxoData";
import ShowUI from "./ShowUI";
const Txc: React.FC = () => {
  let obj = {};
  const formatedArray = shortData
    .split("\n")
    .map((item) => item.split(" >").map((i) => i.trim()));

  const arrToObj = (obj: any) => {
    for (let el of formatedArray) {
      aTO(obj, el);
    }

    function aTO(obj: any, arr: any, i = 0) {
      if (i > arr.length - 1) {
        return;
      }
      if (arr[i] in obj) {
        aTO(obj[arr[i]], arr, i + 1);
      } else {
        obj[arr[i]] = {};
        aTO(obj[arr[i]], arr, i + 1);
      }
    }
  };

  arrToObj(obj);

  console.log(obj);

  return (
    <div className="taxonomy-wrapper">
      <div className="taxonomy-heading">Taxonomy Using Recurcive function</div>
      <ShowUI obj={obj} />
    </div>
  );
};

export default Txc;
