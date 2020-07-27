import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board";

const app = document.getElementById("app");
ReactDOM.render(<Board knightPosition={[7, 5]} />, app);
