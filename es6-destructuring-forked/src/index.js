// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import { honda, tesla } from "./practice";
const { topSpeed: teslaTopSpeed } = tesla.speedStats; // Destructuring
const [teslaTopColour] = tesla.coloursByPopularity; // Array destructuring
const { topSpeed: hondaTopSpeed } = honda.speedStats; // Destructuring
const [hondaTopColour] = honda.coloursByPopularity; // Array destructuring
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
