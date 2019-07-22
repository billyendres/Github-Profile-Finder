import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class NavClass extends Component {
	state = {
		text: ""
	};

	onSubmit = e => {
		e.preventDefault();
		this.props.searchUsers(this.state.text);
		this.setState({ text: " " });
	};

	onChange = e => this.setState({ text: e.target.value });

	static defaultProps = {
		title: "Github Finder",
		icon: "fab fa-github"
	};
	render() {
		const { icon, title } = this.props;
		return (
			<Navbar
				fixed="top"
				style={{ background: "cyan" }}
				className="justify-content-between"
			>
				<Navbar.Brand href="home" style={{ fontSize: "2rem" }}>
					<i className={icon} style={{ fontSize: "2rem", marginRight: "1rem" }} />
					{title}
				</Navbar.Brand>
				<Form inline onSubmit={this.onSubmit}>
					<FormControl
						type="text"
						placeholder="Search"
						className="mr-sm-2"
						value={this.state.text}
						onChange={this.onChange}
					/>
					<Button variant="outline-dark" onClick={this.onSubmit}>
						Search Users
					</Button>
					{this.props.showClear && (
						<Button variant="outline-dark" onClick={this.props.clearUsers}>
							Clear Users
						</Button>
					)}
				</Form>
			</Navbar>
		);
	}
}

export default NavClass;
