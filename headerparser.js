const headerparser = require("express").Router();

module.exports = headerparser;

headerparser.get("/whoami", (req, res, next) => {
	let ip = req.headers["x-forwarded-for"] ||
		req.connection.remoteAddress ||
		req.socket.remoteAddress ||
		req.connection.socket.remoteAddress;

	let lang = req.headers["accept-language"].split(",")[0];
	let soft = /\(([\s\S]+?)\)/.exec(req.headers["user-agent"])[1];
	let rt = JSON.stringify({
		"ipaddress": ip,
		"language": lang,
		"software": soft
	});
	res.send(rt);
});
