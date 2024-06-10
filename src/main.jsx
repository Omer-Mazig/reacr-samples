import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Sample1 from "./sample1";
import Sample2 from "./sample2";
import Sample3 from "./sample3";
import Sample4 from "./sample4";
import DerivedState from "./derived-state";
import Sample5 from "./sample5";
import Sample6 from "./sample6";
import Sample7 from "./sample7";
import Sample8 from "./sample8";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Sample1 /> */}
    {/* <Sample2 /> */}
    {/* Bad code 👇 */}
    {/* <Sample3 /> */}
    {/* Good code 👇 */}
    {/* <Sample4 /> */}
    {/* <Sample5 /> */}
    {/* <Sample6 /> */}
    {/* <Sample7 /> */}
    <Sample8 />
    {/* <DerivedState /> */}
  </React.StrictMode>
);
