import React, { Component } from "react";
import axios from "axios";
import NavClass from "./NavClass";
import Users from "./Users";

class App extends Component {
	state = {
		users: [],
		loading: false
	};

	async componentDidMount() {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/users?client_id=${
				process.env.REACT_APP_GH_CLIENT_ID
			}&client_secret=${process.env.REACT_APP_GH_CLIENT_SECRET}`
		);
		this.setState({ users: res.data, loading: false });
	}
	render() {
		return (
			<div>
				<NavClass />
				<div style={{ marginBottom: "5rem" }} />
				<Users loading={this.state.loading} users={this.state.users} />
			</div>
		);
	}
}

export default App;
