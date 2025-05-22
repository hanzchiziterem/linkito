import isVaildUrl from "../config/isValidUrl.js";
import Link from "../model/link.model.js";

export const createLink = async (req, res) => {
  const { url } = req.body;
  try {
    const isUrlValid = isVaildUrl(url);
    if (!url || !isUrlValid) {
      return res.status(400).json({ message: "This is not a valid URL." });
    }

    const newLink = new Link({ url });
    await newLink.save();

    return res.status(201).json({
      _id: newLink._id,
      url: newLink.url,
    });
  } catch (error) {
    console.error("Error saving link:", error);
    res.status(500).json({ message: `Server Error.` });
  }
};
