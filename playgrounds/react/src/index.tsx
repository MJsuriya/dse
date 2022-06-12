import { Color } from "@dse/react";
import "@dse/scss/lib/Utilities.css";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <Color hexCode="#000" width="lg" height="lg"></Color>,
  document.querySelector("#root")
);
