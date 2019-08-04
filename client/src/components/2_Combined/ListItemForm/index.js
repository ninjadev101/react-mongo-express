import React from "react";
import { Input, Textarea } from "../../";

export default function ListItemForm({ title = "", text = "" }) {
	return (
		<>
			<div className="row">
				<Input title={title} />
			</div>
			<div className="row">
				<Textarea text={text} />
			</div>
		</>
	);
}
