import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
	return (
		<Jumbotron style={{ margin: "2rem", minWidth: "300px", minHeight: "300px" }}>
			<Container style={{ textAlign: "center" }}>
				<Image style={{ maxHeight: "120px" }} src={avatar_url} roundedCircle />
				<div>{login}</div>
				<div>{html_url}</div>
			</Container>
		</Jumbotron>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired
};

export default UserItem;
