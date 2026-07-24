import { Schema, model, Types } from "mongoose";

const sceneSchema = new Schema(
  {
    project: {
      type: Types.ObjectId,
      ref: "Project",
      required: true,
    },

    title: {
      type: String,
      required: true,
      default: "New Scene",
    },

    order: {
      type: Number,
      default: 0,
    },

    script: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

export const Scene = model("Scene", sceneSchema);
