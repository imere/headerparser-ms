const express = require("express");
const PORT = Number(process.argv[2]) || process.env.PORT;
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "static")));

app.set("views", path.join(__dirname, "pages"));

app.set("view engine", "ejs");

app.use("/", require("./home"));

app.use("/api", require("./headerparser"));

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
