const express = require("express");

const app = express();
const PORT = process.env.PORT || 5500;
const handlebars = require("express-handlebars");

/* engine */
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  console.log("HomePage");
  res.send("<h1>homePage</h1>");
});

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
