const express = require("express");
const cors = require("cors");
const config = require("./config");
const routes = require("./routes");

const app = express();
app.use(cors());
app.use("/", routes);

app.listen(config.server.port, () => {
    console.log(`App listening on port ${config.server.port}`);
});
