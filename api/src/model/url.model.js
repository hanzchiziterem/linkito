import nanoid from "nanoid";
import mongoose from "mongoose";

const urlSchema = mongoose.Schema(
  {
    orignalUrl: { type: String, required: true },
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
