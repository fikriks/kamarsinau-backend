var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const session = require("express-session");
var cors = require("cors");

const PREFIX = `/api/v1`;
var indexRouter = require("./routes/index");
var userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const courseRouter = require("./routes/course");
const moduleRouter = require("./routes/module");
const progressRouter = require("./routes/progress");
const courseInstructorRouter = require("./routes/courseInstructor");
const courseStudentRouter = require("./routes/courseStudent");
const questionRouter = require("./routes/question");

var app = express();
app.use(cors());

app.use(
  session({
    secret: process.env.APP_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 },
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use(`${PREFIX}/`, authRouter);
app.use(`${PREFIX}/courses`, courseRouter);
app.use(`${PREFIX}/modules`, moduleRouter);
app.use(`${PREFIX}/progress`, progressRouter);
app.use(`${PREFIX}/users`, userRouter);
app.use(`${PREFIX}/course-instructors`, courseInstructorRouter);
app.use(`${PREFIX}/course-students`, courseStudentRouter);
app.use(`${PREFIX}/questions`, questionRouter);

module.exports = app;
