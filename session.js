const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const app = express();

/* mongo session connect */
const MongoStore = require("connect-mongo");

const dbString = "mongodb://localhost:27017/session_tutorial";
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

/* connect to database */
const connection = mongoose.createConnection(dbString, dbOptions);

/* middleware for POST  */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* session Store */
const sessionStore = new MongoStore({
  mongooseConnection: connection,
  collection: "sessions",
});

app.use(
  session({
    secret: "some secret",
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 /* 1 day */,
    },
  })
);

app.get("/", (req, res, next) => {
  res.send("<h1>Hello World (Sessions)</h1>");
});

app.listen(3000, (req, res) => {
  console.log("server has started on port 3000");
});
