import React from "react";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Nav = ({ icon, title }) => {
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
				<FormControl type="text" placeholder="Search" className="mr-sm-2" />
				<Button variant="outline-dark">Search</Button>
			</Form>
		</Navbar>
	);
};

Nav.defaultProps = {
	title: "Github Finder",
	icon: "fab fa-github"
};

Nav.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};
export default Nav;
