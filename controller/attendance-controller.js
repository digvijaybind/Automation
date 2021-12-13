const AttendanceService = require("./services/attendance-service");

class AttendanceController {
  AttendancePercentage = async (req, res) => {
    const addAttendance = async () => {
      //EXPECTING USER ID
      const data = req.body;
      const response = await AttendanceService.addAttendance(data);
    };

    const findAttendance = async () => {
      const userId = "user ki id";
      const response = await AttendanceService.findAttendance(userId);
      console.log(response)
    };

    const findAttendancePercentage = async () => {
        const userId = "user ki id";
        const attendanceCount = await AttendanceService.findAttendance(userId);
        const per  = attendanceCount/30 *100;
        console.log(per);
      };
  };
}

module.exports = new AttendanceController();
