const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5500;
const handlebars = require("express-handlebars");

/* hbs */

/* engine */
app.engine(
  "handlebars",
  handlebars.engine({
    layoutsDir: __dirname + "/views/layout",
    partialsDir: "views/partials",
  })
);
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  console.log("HomePage");
  res.render("index", { layout: "main", style: "index.css", title: "Home" });
});

/* Static Files */
app.use(express.static(path.join(__dirname, "/public")));

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
