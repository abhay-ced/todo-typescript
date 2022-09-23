import React, { useState } from "react";

const ShowUI = ({ obj }: any) => {
  const entries = Object.keys(obj);
  const [show, setShow] = useState<boolean>(false);
  const [id, setId] = useState<any>();
  return (
    <div>
      {entries &&
        entries.map((item, i) => {
          return (
            <div
              key={i}
              onClick={(e) => {
                setId(i);
                e.stopPropagation();
                setShow(!show);
              }}
              style={{ marginLeft: "50px" }}
            >
              <button> {item} </button>

              {show && id === i && <ShowUI obj={obj[item]} />}
            </div>
          );
        })}
    </div>
  );
};

export default ShowUI;
