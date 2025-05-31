import mongoose from "mongoose";
import {nanoid} from "nanoid";

const urlSchema = mongoose.Schema(
  {
    originalUrl: { type: String, required: true },
    shortId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(7),
    },
  },
  { timestamps: true }
);

const Url = mongoose.model("Url", urlSchema);

export default Url;
