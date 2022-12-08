const express = require("express");
const path = require("path");
const app = express();
const logger = require("./middleware/logger");
let exphbs = require("express-handlebars");

const PORT = process.env.PORT || 5500;

/* handlebars */
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//body prse middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* homepage */
app.get("/", (req, res) => {
  res.render("index", { title: "Member app" });
});

/* ussing middleware */
/*  app.use(logger);*/

/* static */
app.use(express.static(path.join(__dirname, "public")));

/* api routes */
app.use("/api/members", require("./routes/api/members"));

app.listen(PORT, () => console.log(`server has started on port ${PORT}`));
