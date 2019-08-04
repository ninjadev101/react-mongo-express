import axios from "axios";

import { GET_POST, GET_POSTS } from "./types";

export const getPosts = () => async dispatch => {
	try {
		const res = await axios.get("/api/posts");
		dispatch({
			type: GET_POSTS,
			payload: res.data
		});
	} catch (err) {
		// dispatch({
		// 	type: POST_ERROR,
		// 	payload: { msg: err.response.statusText, status: err.response.status }
		// });
		console.log("Error in getPost action: ", err.response);
	}
};

export const deletePost = (id, history) => async dispatch => {
	if (window.confirm("Are you sure? This can NOT be undone!")) {
		try {
			const res = await axios.delete(`/api/posts/${id}`);

			dispatch({
				type: GET_POSTS,
				payload: res.data
			});
			history.push("/");
		} catch (err) {
			// dispatch({
			// 	type: POST_ERROR,
			// 	payload: { msg: err.response.statusText, status: err.response.status }
			// });
			console.log("Error in deletePost action: ", err.response);
		}
	}
};

export const createPost = (
	formData,
	history,
	edit = false
) => async dispatch => {
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};

	try {
		const res = await axios.post("/api/posts", formData, config);
		dispatch({
			type: GET_POST,
			payload: res.data
		});
		// edit ? alert("Updated") : alert("Created");
		history.push("/");
	} catch (err) {
		// dispatch({
		// 	type: POST_ERROR,
		// 	payload: { msg: err.response.statusText, status: err.response.status }
		// });
		console.log("Error in createPost action: ", err.response.data.errors);
	}
};

export const getPost = id => async dispatch => {
	try {
		const res = await axios.get(`/api/posts/${id}`);

		dispatch({
			type: GET_POST,
			payload: res.data
		});
	} catch (err) {
		// dispatch({
		// 	type: POST_ERROR,
		// 	payload: { msg: err.response.statusText, status: err.response.status }
		// });
		console.log("Error in getPost action: ", err.response);
	}
};
