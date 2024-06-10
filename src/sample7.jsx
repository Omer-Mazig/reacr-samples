import React, { useEffect, useState } from "react";

const GET_URL = `http://filltext.com/?rows=20&fname={firstName}`;

function Sample7() {
  const [data, setData] = useState([]);
  console.log("APP RENDER");

  async function getData() {
    const response = await fetch(GET_URL);
    const newData = await response.json();
    setData(newData);
  }

  useEffect(() => {
    getData();
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}

export default Sample7;
