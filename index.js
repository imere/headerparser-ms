const express = require("express");
const PORT = Number(process.argv[2]) || process.env.PORT;

const app = express();

const hpRouter = require("./headerparser");
app.use("/api", hpRouter);

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
