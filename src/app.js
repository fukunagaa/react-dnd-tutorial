import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board";
import { observe } from "./components/Game";

const app = document.getElementById("app");
observe((knightPosition) =>
  ReactDOM.render(<Board knightPosition={knightPosition} />, app)
);
