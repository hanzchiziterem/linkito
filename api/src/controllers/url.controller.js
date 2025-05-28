import isVaildUrl from "../config/isValidUrl.js";
import Url from "../model/url.model.js";

export const createUrl = async (req, res) => {
  const { originalUrl } = req.body;
  try {
    const isUrlValid = isVaildUrl(originalUrl);
    if (!originalUrl || !isUrlValid) {
      return res.status(400).json({ error: "Invalid URL." });
    }

    const urlDoc = new Url({ originalUrl });
    await urlDoc.save();

    return res.status(201).json({
      shortId: urlDoc.shortId,
    });
  } catch (error) {
    console.error("Error saving url:", error);
    res.status(500).json({ message: `Server Error.` });
  }
};

export const getUniqueId = async (req, res) => {
  const { shortId } = req.params;

  try {
    const urlDoc = await Url.findOne({ shortId });
    if (urlDoc) {
      return res.redirect(urlDoc.originalUrl);
    } else {
      return res.status(400).json({ error: "URL not found." });
    }
  } catch (error) {
    console.log("Error in getUniqueId controller: ", error.message);
    res.status(500).json({ message: "Internal Server Error." });
  }
};
