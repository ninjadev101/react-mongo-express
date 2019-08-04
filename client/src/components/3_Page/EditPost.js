import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Spinner } from "../";
import { getPost, createPost } from "../../actions";

const EditPost = ({
	createPost,
	getPost,
	match,
	posts: { post, loading },
	history
}) => {
	const [formData, setFormData] = useState({
		title: loading ? "" : post.title,
		text: loading ? "" : post.text
	});

	useEffect(() => {
		getPost(match.params.id);
	}, [getPost, match.params.id]);

	const { title, text } = formData;

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const onSubmit = e => {
		e.preventDefault();
		createPost(formData, history, true);
	};

	return loading || !post ? (
		<Spinner fullScreen />
	) : (
		<form className="wrapper content-area" onSubmit={e => onSubmit(e)}>
			<h1>Edit News</h1>
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
				<button type="submit" className="ButtonOne">
					Submit
				</button>
				<Link to="/" className="ButtonOne">
					Back
				</Link>
			</div>
		</form>
	);
};

const mapStateToProps = state => ({
	posts: state.posts
});

export default connect(
	mapStateToProps,
	{ getPost, createPost }
)(withRouter(EditPost));
