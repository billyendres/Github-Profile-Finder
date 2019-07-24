import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import NavClass from "./NavClass";
import Users from "./Users";
import About from "./About";

class App extends Component {
	state = {
		users: [],
		loading: false
	};

	searchUsers = async text => {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${
				process.env.REACT_APP_GH_CLIENT_ID
			}&client_secret=${process.env.REACT_APP_GH_CLIENT_SECRET}`
		);
		this.setState({ users: res.data.items, loading: false });
	};

	clearUsers = () => {
		this.setState({ users: [], loading: false });
	};

	render() {
		return (
			<BrowserRouter>
				<div>
					<NavClass
						searchUsers={this.searchUsers}
						clearUsers={this.clearUsers}
						showClear={this.state.users.length > 0 ? true : false}
					/>
					<Switch>
						<Route
							exact
							path="/home"
							render={props => (
								<Fragment>
									<div style={{ marginBottom: "5rem" }} />
									<Users loading={this.state.loading} users={this.state.users} />
								</Fragment>
							)}
						/>
						<Route exact path="/about" component={About} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
