import React, { useState } from "react";
import "./index.scss";

export function Input(props) {
	const [title, setTitle] = useState(props.title);
	return (
		<input
			type="text"
			name="newsTitle"
			placeholder="eg News Title"
			value={title}
			title="newsTitle"
			onChange={e => {
				setTitle(e.target.value);
			}}
		/>
	);
}

export function Textarea(props) {
	const [text, setText] = useState(props.text);
	return (
		<textarea
			name="newsText"
			placeholder="eg News Content"
			value={text}
			title="newsText"
			onChange={e => {
				setText(e.target.value);
			}}
			rows={5}
		/>
	);
}
