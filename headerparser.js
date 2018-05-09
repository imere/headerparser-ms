const headerparser = require("express").Router();

module.exports = headerparser;

headerparser.get("/whoami", (req, res, next) => {
	let ip = /*/^[\s\S]+:([\s\S]+)/.exec(*/req.headers["x-forwarded-for"] ||
	req.connection.remoteAddress ||
	req.socket.remoteAddress ||
	req.connection.socket.remoteAddress);//[1];
	let lang = req.headers["accept-language"].split(",")[0];
	let soft = /\(([\s\S]+?)\)/.exec(req.headers["user-agent"])[1];
	let rt = JSON.stringify({
		"ipaddress": ip,
		"language": lang,
		"software": soft
	});
	res.send(rt);
});

