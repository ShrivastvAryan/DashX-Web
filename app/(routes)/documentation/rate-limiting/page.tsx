import React from "react";

const rateLimits = [
  { endpoint: "Payment Link Creation", limit: "1 requests per second" },
  { endpoint: "Payment Stats", limit: "50 requests per second" },
  { endpoint: "Verify Payment", limit: "10 requests per second" },
];

const RateLimitingDocs = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Rate Limiting</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-600">
          Rate limiting is implemented to ensure fair usage of the API and
          maintain system stability. Each API endpoint has specific rate limits
          based on its resource intensity and security requirements.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Rate Limits by Endpoint</h2>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="space-y-4">
            {rateLimits.map((limit, index) => (
              <div
                key={index}
                className="border-b border-gray-100 pb-4 last:border-0"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {limit.endpoint}
                </h3>
                <p className="text-gray-600">{limit.limit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section>
        <h2 className="text-2xl font-semibold mb-4">Rate Limit Headers</h2>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <p className="text-gray-600 mb-4">
            The API includes rate limit information in the response headers:
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm">
            {`X-RateLimit-Limit: 60
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1623766800`}
          </pre>
          <div className="mt-4 space-y-2">
            <p className="text-gray-600">
              <strong>X-RateLimit-Limit:</strong> Maximum number of requests
              allowed in the time window
            </p>
            <p className="text-gray-600">
              <strong>X-RateLimit-Remaining:</strong> Number of requests
              remaining in the current time window
            </p>
            <p className="text-gray-600">
              <strong>X-RateLimit-Reset:</strong> Unix timestamp when the rate
              limit will reset
            </p>
          </div>
        </div>
      </section> */}

      <section>
        <h2 className="text-2xl font-semibold mb-4">Handling Rate Limits</h2>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-3">Best Practices</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Implement exponential backoff when hitting rate limits</li>
            <li>Cache responses when possible to reduce API calls</li>
            <li>Monitor rate limit headers to optimize request timing</li>
            <li>
              Consider implementing a queue system for high-volume operations
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Example Response</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm">
            {`HTTP/1.1 429 Too Many Requests
Content-Type: application/json

{
  "error": "rate_limit_exceeded",
  "message": "Rate limit exceeded. Please try again in 60 seconds.",
  "retry_after": 60
}`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Increasing Rate Limits</h2>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <p className="text-gray-600">
            If you need higher rate limits for your use case, please contact our
            support team at{" "}
            <a
              href="mailto:business@dashx.xyz"
              className="text-blue-600 hover:text-blue-800"
            >
              business@dashx.xyz
            </a>
            . We will evaluate your requirements and adjust the limits
            accordingly.
          </p>
        </div>
      </section>
    </div>
  );
};

export default RateLimitingDocs;
