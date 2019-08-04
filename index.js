const express = require("express");
const app = express();

app.use(express.static(__dirname));
app.use("/alexlaw", express.static(__dirname));

app.listen(3030);
console.log("Listening on http://localhost:3030/");
