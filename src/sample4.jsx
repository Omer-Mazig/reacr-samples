import React, { useState } from "react";

function Sample4() {
  console.log("App rendering...");

  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const double = count * 2;

  function incrementCount() {
    setIsLoading(true);
    setCount(count + 1);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {double}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

export default Sample4;
