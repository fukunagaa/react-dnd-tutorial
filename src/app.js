import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board";

const app = document.getElementById("app");
ReactDOM.render(<Board knightPosition={[0, 0]} />, app);
