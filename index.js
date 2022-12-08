const express = require("express");
const path = require("path");
const app = express();
const logger = require("./middleware/logger");
const PORT = process.env.PORT || 5500;

//body prse middleware
app.use(express.json());
app.use(express.urlencoded());

/* ussing middleware */
/*  app.use(logger);*/

/* static */
app.use(express.static(path.join(__dirname, "public")));

/* api routes */
app.use("/api/members", require("./routes/api/members"));

app.listen(PORT, () => console.log(`server has started on port ${PORT}`));
