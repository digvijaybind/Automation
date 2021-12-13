const AttendanceModel = require("./model/attendance-model");

class AttendanceService {
  addAttendance = async (data) => {
    return await AttendanceModel.create(data);
  };

  findAttendance = async (data) => {
    return await AttendanceModel.countDocuments({ _id: data });
  };
}

module.exports = new AttendanceService();
