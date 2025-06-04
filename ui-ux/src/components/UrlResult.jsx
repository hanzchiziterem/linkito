const UrlResult = ({ shortUrl }) => {
  if (!shortUrl) return null;

  return (
    <div className="result">
      <p>Short URL:</p>
      <a
        href={`http://localhost:4250/${shortUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {`http://localhost:4250/${shortUrl}`}
      </a>
    </div>
  );
};

export default UrlResult;
