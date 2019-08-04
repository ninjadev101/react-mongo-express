import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPosts } from "../../actions";
import List from "../2_Combined/List";
import { Spinner } from "../";

function Dashboard({ getPosts, posts: { posts, loading } }) {
	useEffect(() => {
		getPosts();
	}, [getPosts]);
	return loading ? (
		<Spinner fullScreen />
	) : (
		<div>
			<div className="container">
				<div className="flex-between wrapper">
					<h1 className="center">World News</h1>
					<Link to="/create" className="ButtonOne">
						Create news
					</Link>
				</div>
				<div className="wrapper white">
					{posts.length > 0 ? <List list={posts} /> : <h4>No news found</h4>}
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
	posts: state.posts
});

export default connect(
	mapStateToProps,
	{ getPosts }
)(Dashboard);
