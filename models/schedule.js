import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema(
  {
    gameName: {
      type: String,
      required: true,
      enum: [
        "cricket",
        "football",
        "basketball",
        "volleyball",
        "badminton",
        "tug of war",
        "carrom",
        "athletics",
        "rangoli",
        "chess",
        "face painting",
        "mehandi",
        "shot put",
      ],
      trim: true,
    },

    teamA: {
      type: String,
      required: true,
      trim: true,
    },

    teamB: {
      type: String,
      required: true,
      trim: true,
    },

    venue: {
      type: String,
      required: true,
      trim: true,
    },

    startTime: {
      type: Date,
      required: true,
    },

    endTime: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return value > this.startTime;
        },
        message: "End time must be after start time.",
      },
    },

    match_live_url: {
      type: String,
      // Accept ANY http/https URL
      match: [
        /^https?:\/\/.+/,
        "Invalid URL format",
      ],
      default: null,
    },
  },
  { timestamps: true }
);

const Schedule = mongoose.model("Schedule", scheduleSchema);

export default Schedule;
