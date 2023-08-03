import React from "react";
import ReactDOM from "react-dom/client";

const JsxHeading = () => (
  <div>
    <h1 className="heading">This is React component</h1>
  </div>
);

console.log(JsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<JsxHeading />);
