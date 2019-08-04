import React from "react";
import { Link } from "react-router-dom";

function ListItem({ _id, title, text }) {
	return (
		<li className="content-area">
			<h2>{title}</h2>
			<p>{text}</p>
			<Link to={`/view/${_id}`} className="ButtonOne">
				View
			</Link>
		</li>
	);
}

export default ListItem;
