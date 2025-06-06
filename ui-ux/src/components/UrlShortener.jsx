import { useState } from "react";
import api from "../services/axios";

const UrlShortener = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
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
      setSuccess(true);
      setShortUrl(`${res.data.shortId}`);
      setError("");

    } catch (error) {
      setError("Failed to shorten URL. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-primary">Linkito</h1>
        <p className="text-gray-500 mt-2">Shorten your links in seconds</p>
      </div>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={url}
            className="input input-bordered w-full focus:ring-2 focus:ring-primary"
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            required
          />
          <button
            className="btn btn-primary"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Shortening..." : "Shorten URL"}
          </button>
        </div>
      </form>
      {error && (
        <div className="toast toast-bottom toast-center">
          <div className="alert alert-error shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          </div>
        </div>
      )}

      {success && (
        <div className="toast toast-bottom toast-center">
          <div className="alert alert-success shadow-lg">
            <div className="flex flex-col">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-bold">Success!</span>
              </div>
              
              <div className="mt-2 flex items-center">
                <span className="truncate max-w-[180px] mr-2">{`link.ito/${shortUrl}`}</span>
                <button
                  onClick={copyToClipboard}
                  className={`btn btn-xs ${copied ? 'btn-success' : 'btn-ghost'}`}
                >
                  {copied ? '✓ Copied' : 'Copy'}
                </button>
              </div>
            </div>
            <button onClick={() => setSuccess(false)} className="btn btn-sm btn-ghost">
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlShortener;
