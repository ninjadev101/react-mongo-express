import React from "react";
import { Route, Switch } from "react-router-dom";
import { CreatePost, ViewPost, EditPost } from "../components";

function Routes() {
	return (
		<section className="container">
			<Switch>
				<Route exact path="/create" component={CreatePost} />
				<Route exact path="/view/:id" component={ViewPost} />
				<Route exact path="/edit/:id" component={EditPost} />
			</Switch>
		</section>
	);
}

export default Routes;
