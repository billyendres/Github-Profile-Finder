import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class NavClass extends Component {
	state = {
		text: ""
	};

	onChange = e => {
		e.preventDefault();
		console.log(this.state.text);
	};

	onSubmit = e => this.setState({ [e.target.name]: e.target.value });

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
				<Form inline>
					<FormControl
						type="text"
						placeholder="Search"
						className="mr-sm-2"
						value={this.state.text}
						onChange={this.onChange}
					/>
					<Button onSubmit={this.onSubmit} variant="outline-dark">
						Search
					</Button>
				</Form>
			</Navbar>
		);
	}
}

export default NavClass;
