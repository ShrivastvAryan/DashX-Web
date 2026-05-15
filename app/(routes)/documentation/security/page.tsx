import React from "react";

const SecurityDocs = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Security Best Practices</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-600">
          Security is our top priority. This guide outlines best practices for
          securely integrating with the DashX platform and protecting your
          application and users.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">API Key Security</h2>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-3">Best Practices</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              <strong>Never expose API keys:</strong> Keep API keys secure and
              never expose them in client-side code, version control, or public
              repositories
            </li>
            <li>
              <strong>Never expose Merchant ID:</strong> Keep your merchant ID secure and
              never expose it in client-side code, version control, or public
              repositories
            </li>
            <li>
              <strong>Regular rotation:</strong> Rotate API keys periodically to
              reduce risk
            </li>
            <li>
              <strong>Access control:</strong> Use different keys per
              environment and revoke compromised keys immediately
            </li>
            <li>
              <strong>Environment variables:</strong> Store API keys and merchant ID in secure
              environment variables
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Example Implementation
          </h3>
          <pre className="bg-gray-100 p-4 rounded text-sm">
            {`# .env file
DASHX_API_KEY=your_api_key_here
DASHX_MERCHANT_ID=your_merchant_id_here

# Server-side code
import os
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv('DASHX_API_KEY')
merchant_id = os.getenv('DASHX_MERCHANT_ID')`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Webhook Security</h2>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-3">Best Practices</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              <strong>Verify signatures:</strong> Always verify webhook
              signatures to ensure requests are from DashX
            </li>
            <li>
              <strong>Use HTTPS:</strong> Only accept webhooks over HTTPS
            </li>
            <li>
              <strong>Idempotency:</strong> Handle duplicate webhook events
              gracefully
            </li>
            <li>
              <strong>Timeout handling:</strong> Respond to webhooks quickly and
              process asynchronously if needed
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Example Implementation
          </h3>
          <pre className="bg-gray-100 p-4 rounded text-sm">
            {`import hmac
import hashlib

def verify_webhook_signature(payload, signature, secret):
    expected_signature = hmac.new(
        secret.encode('utf-8'),
        payload.encode('utf-8'),
        hashlib.sha256
    ).hexdigest()
    return hmac.compare_digest(signature, expected_signature)`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-3">Best Practices</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              <strong>Encrypt sensitive data:</strong> Always encrypt sensitive
              data in transit and at rest
            </li>
            <li>
              <strong>Input validation:</strong> Validate all user input before
              processing
            </li>
            <li>
              <strong>Error handling:</strong> Implement proper error handling
              without exposing sensitive information
            </li>
            <li>
              <strong>Logging:</strong> Avoid logging sensitive information and
              implement proper log rotation
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Network Security</h2>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-3">Best Practices</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              <strong>Use HTTPS:</strong> Always use HTTPS for all API
              communications
            </li>
            <li>
              <strong>IP whitelisting:</strong> Consider implementing IP
              whitelisting for additional security
            </li>
            <li>
              <strong>Firewall rules:</strong> Configure firewall rules to
              restrict access to necessary endpoints
            </li>
            <li>
              <strong>Keep systems updated:</strong> Regularly update systems
              and dependencies
            </li>
          </ul>
        </div>
      </section>

      {/* <section>
        <h2 className="text-2xl font-semibold mb-4">Security Checklist</h2>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="space-y-4">
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" id="check1" />
              <label htmlFor="check1" className="text-gray-600">
                API keys are stored securely and never exposed in client-side
                code
              </label>
            </div>
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" id="check2" />
              <label htmlFor="check2" className="text-gray-600">
                All API communications use HTTPS
              </label>
            </div>
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" id="check3" />
              <label htmlFor="check3" className="text-gray-600">
                Webhook signatures are verified
              </label>
            </div>
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" id="check4" />
              <label htmlFor="check4" className="text-gray-600">
                Proper error handling is implemented
              </label>
            </div>
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" id="check5" />
              <label htmlFor="check5" className="text-gray-600">
                Regular security audits are performed
              </label>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default SecurityDocs;
