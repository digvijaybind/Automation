const router = require("express").Router();
const attendanceController=require("./controller/attendance-controller");
const  ClassController=require("./controller/class-controller");
const  SchoolController=require("./controller/school-controller");

router.get("/attendancePercentage");


module.exports = router;
