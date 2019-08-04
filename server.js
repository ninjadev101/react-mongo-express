const express = require("express");
const connectDB = require("./config/db");
const Auth = require("./routes/api/auth");
const Users = require("./routes/api/users");
const Posts = require("./routes/api/posts");
const Profile = require("./routes/api/profile");

const app = express();
app.get("/", (req, res) => {
	res.send("REST app is running");
});
connectDB();

app.use(express.json({ extended: false }));

app.use("/api/auth", Auth);
app.use("/api/users", Users);
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", Profile);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
