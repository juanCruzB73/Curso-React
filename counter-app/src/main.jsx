import React from "react"
import ReactDOM from "react-dom/client"
import {FirstApp} from "./FirstApp"
//import {CounterTypes} from "./CounterApp"
import "./style.css"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirstApp title="Titulo loco"/>
  </React.StrictMode>
)