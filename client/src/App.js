import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { Dashboard } from "./components";
import Routes from "./routing/Routes";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route component={Routes} />
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
