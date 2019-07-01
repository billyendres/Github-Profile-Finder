import React, { Component } from "react";
import axios from "axios";
import Nav from "./Nav";
import Users from "./Users";

class App extends Component {
	state = {
		users: [],
		loading: false
	};

	async componentDidMount() {
		this.setState({ loading: true });
		const res = await axios.get("https://api.github.com/users");
		this.setState({ users: res.data, loading: false });
	}
	render() {
		return (
			<div>
				<Nav />
				<div style={{ marginBottom: "5rem" }} />
				<Users loading={this.state.loading} users={this.state.users} />
			</div>
		);
	}
}

export default App;
