import React, { useState } from "react";

const ShowUI = ({ obj }: any) => {
  const entries = Object.keys(obj);
  const [show, setShow] = useState<boolean>();
  const [id, setId] = useState<any>();

  return (
    <>
      <div>
        {entries &&
          entries.map((item, i) => {
            return (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setId(i);
                  setShow(!show);
                }}
                className="show-ui-wrapper"
                key={i}
              >
                {Object.keys(obj[item]).length !== 0 ? (
                  <button className="recurcive-btn" key={i}>
                    {item}
                  </button>
                ) : (
                  <p className="show-ui-content">{item} </p>
                )}
                {show && id === i && <ShowUI obj={obj[item]} />}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ShowUI;
