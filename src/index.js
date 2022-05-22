import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {MyContext} from "./store/context.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyContext><App /></MyContext>);
