import mongoose from "mongoose";

const linkSchema = mongoose.Schema(
  {
    url: { type: String, required: true },
  },
  { timestamps: true }
);

const Link = mongoose.model("Link", linkSchema);

export default Link;
