import React from "react";

function Sample1() {
  const fruits = ["banana", "melon", "apple"];

  function logInnerText(ev) {
    console.log(ev.target.innerText);
  }

  function logItem(item) {
    console.log(item);
  }

  return (
    <>
      <h1 onClick={logInnerText}>Hello React</h1>
      <ul>
        {fruits.map((fruit, index) => {
          return (
            <li key={fruit} onClick={() => logItem(fruit)}>
              <div>Fruit: {fruit}</div>
              <div>Index: {index}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Sample1;
