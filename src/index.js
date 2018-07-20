import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import TodoApp from "./Components/TodoApp";

ReactDOM.render(<TodoApp />, document.getElementById('root'));
registerServiceWorker();
