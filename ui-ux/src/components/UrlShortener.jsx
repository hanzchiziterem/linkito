import { useState } from "react";
import api from "../services/axios";
import UrlResult from "./UrlResult";

const UrlShortener = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!url) {
      setError("Please enter a url");
      return;
    }
    try {
      setIsLoading(true);
      const res = await api.post("http://localhost:4250/api/create/url", {
        originalUrl: url,
      });
      setShortUrl(`${res.data.shortId}`);
      setError("");
    } catch (error) {
      setError("Failed to shorten URL. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Linkito</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL to shorten"
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Shortening..." : "Shorten URL"}
        </button>
      </form>
      {error && <p className="error"></p>}
      {shortUrl && (
        <UrlResult shortUrl={shortUrl} />
      )}
    </div>
  );
};

export default UrlShortener;
