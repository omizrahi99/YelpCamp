const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Campground = require("./models/campground");
const Comment = require("./models/comment");
const seedDB = require("./seeds");
const dotenv = require("dotenv");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");
const methodOverride = require("method-override");
const flash = require("connect-flash");

const commentRoutes = require("./routes/comments"),
  campgroundRoutes = require("./routes/campgrounds"),
  authRoutes = require("./routes/index");

dotenv.config();

// seedDB();

app.use(flash());

// PASSPORT CONFIGURATION
app.use(
  require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(methodOverride("_method"));

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-ssmwc.mongodb.net/yelp_camp?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.render("landing");
});

app.use(authRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(process.env.PORT || 5000, function () {
  console.log("Server listening on port 3000");
});
