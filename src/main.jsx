import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Sample1 from "./sample1";
import Sample2 from "./sample2";
import Sample3 from "./sample3";
import Sample4 from "./sample4";
import DerivedState from "./derived-state";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Sample1 /> */}
    {/* <Sample2 /> */}
    {/* Bad code 👇 */}
    {/* <Sample3 /> */}
    {/* Good code 👇 */}
    <Sample4 />
    {/* <DerivedState /> */}
  </React.StrictMode>
);
