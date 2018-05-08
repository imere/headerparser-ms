const homeRouter = require("express").Router();
const ejs = require("ejs");
const path = require("path");

module.exports = homeRouter;

homeRouter.get("/", (req, res, next) => {
	let ctx = {};
	res.render("index.ejs", ctx)
});
