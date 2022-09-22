import React, { useState } from "react";

const ShowUI = ({ obj }: any) => {
  const entries = Object.keys(obj);
  const [show, setShow] = useState<boolean>();
  const [id, setId] = useState<any>();

  return (
    <>
      {/* first method */}
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
                style={{
                  width: "80px",
                  left: 25,
                  margin: "0 auto",
                  paddingTop: "6px",
                  paddingLeft: "50px",
                  borderLeft: "1px solid black",
                }}
                key={i}
              >
                {Object.keys(obj[item]).length !== 0 ? (
                  <button className="recurcive-btn" key={i}>
                    {item}
                  </button>
                ) : (
                  <p style={{ padding: "6px 0", margin: "0" }}>{item} </p>
                )}

                {show && id === i && <ShowUI obj={obj[item]} />}
              </div>
            );
          })}
      </div>
      {/* <div>
        <select
          onChange={(e) => {
            e.stopPropagation();
            setShowDrop(!showDrop);
          }}
        >
          {entries &&
            entries.map((item) => {
              return <option value={item}> {item} </option>;
            })}
        </select>
        {entries &&
          entries.map((item) => {
            return <div>{showDrop && <ShowUI obj={obj[item]} />}</div>;
          })}
      </div> */}
    </>
  );
};

export default ShowUI;
