import React, { useState } from "react";

function Counter(props) {
  console.log("counter render");
  return (
    <div
      style={{
        border: `10px solid ${props.borderColor}`,
        marginBlock: "1rem",
        padding: "1rem",
      }}
    >
      <h2>{props.title}</h2>
      <div>{props.count}</div>
      <button onClick={() => props.setCount(props.count + 1)}>incerment</button>
    </div>
  );
}

function Sample5() {
  const [count_1, setCount_1] = useState(0);
  const [count_2, setCount_2] = useState(0);
  console.log("app render");
  return (
    <div>
      <header>
        <h1>My app!</h1>
        <p>The greatest app in the class</p>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">contant</a>
          </li>
        </ul>
      </nav>
      <div>Total: {count_1 + count_2} </div>
      <Counter
        count={count_1}
        setCount={setCount_1}
        title="Omer"
        borderColor="red"
      />
      <Counter
        count={count_2}
        setCount={setCount_2}
        title="Yohai"
        borderColor="green"
      />
    </div>
  );
}

export default Sample5;
