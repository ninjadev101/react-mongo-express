const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Post = require("../../models/Post");

// @route   POST api/posts
// @desc    Create a Post
// @access  Private

router.post(
	"/",
	[
		check("title", "Title is required")
			.not()
			.isEmpty(),
		check("text", "Text is required")
			.not()
			.isEmpty()
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { title, text } = req.body;

		const postFields = {};
		if (title) postFields.title = title;
		if (text) postFields.text = text;

		try {
			let post = await Post.findOne({ id: req.body._id });
			if (post) {
				post = await Post.findOneAndUpdate(
					{ id: req.body._id },
					{ $set: postFields }
				);
				return res.json(post);
			}
			post = new Post({ title: req.body.title, text: req.body.text });
			await post.save();
			res.json(post);
		} catch (err) {
			console.error("api/posts: ", err.message);
			res.status(500).send("Server error");
		}
	}
);

// @route   GET api/posts
// @desc    Get all posts
// @access  Public

router.get("/", async (req, res) => {
	try {
		const posts = await Post.find().sort({ date: -1 });
		res.json(posts);
	} catch (err) {
		console.warn(err.message);
		res.status(500).send("Server error");
	}
});

// @route   GET api/post/:id
// @desc    Get single post
// @access  Public

router.get("/:id", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (!post) {
			return res.status(404).json({ msg: "Post not found" });
		}
		res.json(post);
	} catch (err) {
		console.warn(err.message);
		res.status(404).json({ msg: "Post not found" });
	}
	res.status(500).send("api/posts: Server Error");
});

//	@route		DELETE api/post/:id
//	@desc			Delete single post
//	@acces		Private
router.delete("/:id", async (req, res) => {
	try {
		await Post.findOneAndRemove({ _id: req.params.id });
		const posts = await Post.find().sort({ date: -1 });

		res.json(posts);
	} catch (err) {
		console.error("api/posts: ", err.message);
		res.status(500).send("api/posts: Server error");
	}
});

module.exports = router;
