import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Spinner } from "../";
import { getPost, deletePost } from "../../actions";

const ViewPost = ({
	history,
	deletePost,
	getPost,
	match,
	posts: { post, loading }
}) => {
	useEffect(() => {
		getPost(match.params.id);
	}, [getPost, match.params.id]);

	return loading || !post ? (
		<Spinner fullScreen />
	) : (
		<div className="wrapper content-area white">
			<h1>{post.title}</h1>
			<p>{post.text}</p>
			<div className="flex-between">
				<Link to="/" className="ButtonOne">
					Back
				</Link>
				<Link to={`/edit/${post._id}`} className="ButtonOne">
					Edit
				</Link>
				<button
					className="ButtonOne"
					onClick={() => deletePost(post._id, history)}>
					Delete
				</button>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	posts: state.posts
});

export default connect(
	mapStateToProps,
	{ getPost, deletePost }
)(withRouter(ViewPost));
