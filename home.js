const homeRouter = require("express").Router();

module.exports = homeRouter;

homeRouter.get("/", (req, res, next) => {
	let ctx = {};
	res.render("index.ejs", ctx)
});
