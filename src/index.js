import React from "react";
import ReactDOM from "react-dom";
import Main from "./pages/main";
import registerServiceWorker from "./registerServiceWorker";
import "./assets/font/styles.css";

ReactDOM.render(<Main />, document.getElementById("root"));

registerServiceWorker();
