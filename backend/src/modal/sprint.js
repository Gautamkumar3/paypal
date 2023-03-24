const mongoose = require("mongoose");

const sprintSchema = new mongoose.Schema({
  title: { type: String, required: [true, "title field is required"] },
  goal: { type: String, required: [true, "Please set your sprint goal"] },
  start_date: {
    type: Date,
    required: [true, "Start date field is required"],
  },
  end_date: {
    type: Date,
    required: [true, "End date field is required"],
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

const Sprint = mongoose.model("sprint", sprintSchema);
module.exports = Sprint;
