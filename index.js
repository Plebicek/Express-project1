const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5500;
const handlebars = require("express-handlebars");
const { NONAME } = require("dns");

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

/* creating error */
function Middleware(req, res, next) {
  const error = new Error("this is errror");
  next(error);
}

/* error handler */
function errorHandler(err, req, res, next) {
  if (err) {
    res.render("error", { layout: "", style: "error.css", title: "error" });
  }
}
/* error init */
app.use(Middleware);

/* route */
app.get("/", (req, res) => {
  console.log("HomePage");
  res.render("index", { layout: "main", style: "index.css", title: "Home" });
});

/* Static Files */
app.use(express.static(path.join(__dirname, "/public")));

/* finally error middleware handler */
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
