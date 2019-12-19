import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createReduxStore } from "./store";

const rootNode = (
	<Provider store={createReduxStore()}>
		<Router>
			<App />
		</Router>
	</Provider>
)

ReactDOM.render(rootNode, document.getElementById("root"));
