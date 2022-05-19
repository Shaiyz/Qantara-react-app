import React from "react";

const Loader = ({ height }) => (
  <div className="loader-wrapper" style={{ height: height }}>
    <div className="loader"></div>
  </div>
);

export default Loader;
