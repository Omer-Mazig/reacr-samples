import React, { useEffect, useState } from "react";

function Sample6() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log(`count ${count}`);

    return () => console.log(`count from cleanup function ${count}`);
  }, [count]);

  console.log("app render");

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={handleCount}>inc</button>
    </div>
  );
}

export default Sample6;
