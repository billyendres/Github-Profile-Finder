import React, { Component } from "react";
import axios from "axios";
import NavClass from "./NavClass";
import Users from "./Users";

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
			<div>
				<NavClass
					searchUsers={this.searchUsers}
					clearUsers={this.clearUsers}
					showClear={this.state.users.length > 0 ? true : false}
				/>
				<div style={{ marginBottom: "5rem" }} />
				<Users loading={this.state.loading} users={this.state.users} />
			</div>
		);
	}
}

export default App;
