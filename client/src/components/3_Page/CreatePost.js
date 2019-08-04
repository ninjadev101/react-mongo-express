import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../../actions";

function CreatePost({ createPost, history }) {
	const [formData, setFormData] = useState({ title: "", text: "" });
	const { title, text } = formData;
	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};
	const onSubmit = e => {
		e.preventDefault();
		createPost(formData, history);
	};
	return (
		<form className="wrapper content-area" onSubmit={e => onSubmit(e)}>
			<h1>Create News</h1>
			<div className="row">
				<input
					type="text"
					name="title"
					placeholder="eg News Title"
					value={title}
					title="newsTitle"
					onChange={e => handleChange(e)}
				/>
			</div>
			<div className="row">
				<textarea
					name="text"
					placeholder="eg News Content"
					value={text}
					title="newsText"
					onChange={e => handleChange(e)}
					rows={5}
				/>
			</div>
			<div className="flex-between">
				<Link to="/" className="ButtonOne">
					Go Back
				</Link>
				<button type="submit" className="ButtonOne">
					Submit
				</button>
			</div>
		</form>
	);
}
export default connect(
	null,
	{ createPost }
)(withRouter(CreatePost));
