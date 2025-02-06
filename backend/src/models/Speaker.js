import mongoose from "mongoose";

const SpeakerSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    expertise: {
      type: String,
      required: true,
    },
    events: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
  },
  {
    timestamps: true,
  },
);

export const Speaker = mongoose.model("Speaker", SpeakerSchema);
