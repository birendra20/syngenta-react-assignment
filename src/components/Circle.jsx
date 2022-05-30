import React from "react";
import "./circle.css";

const Circle = ({ color, num }) => {
  return (
    <>
      <div
        className="balloons"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>{num}</div>
      </div>
    </>
  );
};

export default Circle;
