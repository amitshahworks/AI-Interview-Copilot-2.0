import mongoose, { Document, Schema } from "mongoose";

export interface IInterview extends Document {
  userId: mongoose.Types.ObjectId;

  mode: "hr" | "technical" | "mixed";

  questions: string[];

  answers: string[];

  score: number;

  feedback: string;

  status: "in_progress" | "completed";

  createdAt: Date;
  updatedAt: Date;
}

const interviewSchema = new Schema<IInterview>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    mode: {
      type: String,
      enum: ["hr", "technical", "mixed"],
      required: true,
    },

    questions: {
      type: [String],
      default: [],
    },

    answers: {
      type: [String],
      default: [],
    },

    score: {
      type: Number,
      default: 0,
    },

    feedback: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["in_progress", "completed"],
      default: "in_progress",
    },
  },
  {
    timestamps: true,
  }
);

const Interview = mongoose.model<IInterview>(
  "Interview",
  interviewSchema
);

export default Interview;