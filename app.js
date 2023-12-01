import React from "react";
import ReactDOM from "react-dom";

const element = React.createElement("h1", {}, "Hole");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(element);

root.render(element);
