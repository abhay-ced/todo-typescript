import React, { FC, useState, useEffect } from "react";
import ShowUI from "./ShowUI";
import { shortData, stringData } from "./taxoData";

import "./taxonomy.css";
const Taxonomy: FC = () => {
  const [objData, setObjData] = useState<Object>({});
  let obj = {};

  const formatedArray = shortData
    .split("\n")
    .map((item) => item.split(" >").map((i) => i.trim()));

  const arrayToObject = (obj: any) => {
    for (let elm of formatedArray) {
      elmConvertToObj(obj, elm);
    }

    function elmConvertToObj(obj: any, arr: any, index: number = 0) {
      if (arr.length - 1 < index) {
        return;
      }
      if (arr[index] in obj) {
        elmConvertToObj(obj[arr[index]], arr, index + 1);
      } else {
        obj[arr[index]] = {};
        elmConvertToObj(obj[arr[index]], arr, index + 1);
      }
    }
  };

  arrayToObject(obj);

  return (
    <div className="taxonomy-wrapper">
      <div className="taxonomy-heading">Taxonomy Using Recurcive function</div>
      <ShowUI obj={obj} />
    </div>
  );
};

export default Taxonomy;
