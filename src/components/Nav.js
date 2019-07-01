import React from "react";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";

const Nav = ({ icon, title }) => {
	return (
		<Navbar fixed="top" style={{ background: "cyan" }}>
			<Navbar.Brand href="home" style={{ fontSize: "2rem" }}>
				<i className={icon} style={{ fontSize: "2rem", marginRight: "1rem" }} />
				{title}
			</Navbar.Brand>
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
