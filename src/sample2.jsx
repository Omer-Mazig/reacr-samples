import React from "react";

function Sample2() {
  const isActive = false;
  const title = "sdsassdas";

  return <div className={isActive ? "active" : ""}>{title}</div>;
}

export default Sample2;
