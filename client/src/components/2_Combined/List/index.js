import React from "react";
import ListItem from "../ListItem";

function List({ list }) {
	return (
		<ul className="list">
			{list.map(item => (
				<ListItem key={item._id} {...item} />
			))}
		</ul>
	);
}

export default List;
