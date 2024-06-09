import React from "react";

function Sample3() {
  console.log("App rendering...");
  let count = 0;

  function incrementCount() {
    count++;
    console.log("count", count);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

export default Sample3;
