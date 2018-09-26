import React from "react";
import ReactDOM from "react-dom";
import Main from "./pages/main";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from 'react-redux';
import { Store } from './store';
import "./assets/font/styles.css";

ReactDOM.render(
    <Provider store={Store}>
        <Main />
    </Provider>,
document.getElementById("root"));

registerServiceWorker();
