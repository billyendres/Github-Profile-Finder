import React from "react";
import UserItem from "./UserItem";

const Users = props => {
	return (
		<div style={userStyle}>
			{props.users.map(user => (
				<UserItem key={user.id} user={user} />
			))}
		</div>
	);
};

const userStyle = {
	display: "flex",
	justifyContent: "center",
	flexWrap: "wrap"
};

export default Users;
