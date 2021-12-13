const express = require("express");

const AttendanceRouter = require("./routes/attendance-route");
const ClassRouter = require("./routes/class-route");
const SchoolRouter = require("./routes/school-route");
const StudentRouter = require("./routes/student-route");
const bodyparser=require('body-parser');
app.use("/attendance", AttendanceRouter);
app.use("/class", ClassRouter);
app.use("/school", SchoolRouter);
app.use("/student", StudentRouter);

const app = express();
require("./database/database");

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

module.exports = app;
