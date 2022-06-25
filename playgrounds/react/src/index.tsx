import { Color, Margin, Select, Text } from "@dse/react";
import "@dse/scss/lib/Margin.css";
import "@dse/scss/lib/Select.css";
import "@dse/scss/lib/Text.css";
import "@dse/scss/lib/Utilities.css";
import React from "react";
import ReactDOM from "react-dom";

const options = [
  {
    label: "Strict Black",
    value: "strict-black",
  },
  {
    label: "Heavenly Green",
    value: "heavenly-green",
  },
  {
    label: "Sweet Pink",
    value: "pink",
  },
];

ReactDOM.render(
  <div>
    <Select options={options}></Select>
    <Margin left space="xl">
      <Text size="xl"> Sample Text</Text>
      <Color hexCode="#000" width="lg" height="lg"></Color>
    </Margin>
  </div>,
  document.querySelector("#root")
);
