const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AttendanceSchema = new Schema(
  {
    studentId: {
      type: SchemaType.ObjectId,
      ref: "Student",
    },
    hasAttended: {
        type: Boolean,
        default: false,
    },
    current_date:{

        type:String,
        required:true,

    },
    classId:{
        type:SchemaType.ObjectId,
        ref:'Class'
    },
  },

  
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Attendance", AttendanceSchema);
