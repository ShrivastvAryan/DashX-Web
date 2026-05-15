import React from "react";
import Image from "next/image";
const APIKeysDocs = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">API Keys Documentation</h1>

      <section>
        <h1 className="text-2xl font-bold  text-theme-blue">
          Managing Your API Keys
        </h1>
        <p className="mt-2 ">
          API Keys are required to interact with DashX APIs. You can create,
          regenerate, and delete API Keys from your dashboard.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-gray-800">
          How to Create an API Key
        </h2>
        <ol className="list-decimal list-inside space-y-3 mt-4 text-gray-700">
          <li>
            Go to the <strong>DashX Dashboard</strong>.
          </li>
          <li>Login with your DashX account.</li>
          <li>
            Navigate to <strong>Developer</strong> in the sidebar menu
          </li>
          <li>
            Click the <strong className="text-blue-600">Generate</strong> on the
            top-right.
          </li>
          <Image
            src="/documentation/api-gen.png"
            alt="api-key-gen"
            width={1000}
            height={1000}
          ></Image>
          <li>
            Enter a name for your API Key  and
            click <strong>Generate Key</strong>.
          </li>
          <li className="font-bold text-red-600">
            You will receive an API Secret Key. Save this key securely as it
            will only be visible once.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Using API Keys</h2>
        <div className="bg-white p-6 rounded-lg ">
          <h3 className="text-xl font-semibold mb-3">Authentication</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm">
            {`X-API-KEY: dshx_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
X-MERCHANT-ID: your_merchant_id`}
          </pre>
          <p className="text-gray-600 mt-2">
            The X-MERCHANT-ID header is required for API authentication. You can find your merchant ID when generating an API key in gateway.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-3">
            Supported Endpoints
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium mb-2">1. Payment Links</p>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                {`POST /payment-link/
X-API-KEY: dshx_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
X-MERCHANT-ID: your_merchant_id

{
  "link_type": "FIXED",
  "token": "USDC",
  "accepted_chain_symbols": ["SOL", "MATIC", "ARB", "ETH"],
  "amount": "10.00",
  "title": "Payment Title",
  "description": "Payment Description",
  "collect_email": true,
  "customer_id": "your_customer_id",
  "merchant": "your_merchant_id",
  "expires_at": "xyz" //optional(Original ISO 8601 format) 
}`}
              </pre>
              <p className="text-gray-600 mt-2">
                The customer_id field is optional. When provided, it will automatically map payments to the specified customer in your database.
              </p>

              <h4 className="text-lg font-semibold mt-4 mb-2">Response</h4>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                {`// Success Response (200 OK)
{
    "message": "Payment link created successfully",
    "id": "payment_id",
    "slug": "payment_slug",
    "link": "https://gateway.dashx.xyz/gateway?slug=payment_slug,
    "customer_id": "your_customer_id"
}

// Error Response (400 Bad Request)
{
  "success": false,
  "error": "Invalid amount format"
}`}
              </pre>
            </div>

            <div>
              <p className="font-medium mb-2">2. Payment Status</p>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                {`GET /payment-link/by-slug/?slug={payment_link_slug}
X-API-KEY: dshx_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
X-MERCHANT-ID: your_merchant_id`}
              </pre>
              <h4 className="text-lg font-semibold mt-4 mb-2">Response</h4>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                {`// Success Response (200 OK)
{
  "id": "pl_1234567890abcdef",
  "merchant": "merch_1234567890abcdef",
  "link_type": "FIXED",
  "product": null,
  "payment_walletset": "wset_1234567890abcdef",
  "token": "USDC",
  "accepted_chain_symbols": ["SOL", "MATIC", "ARB", "ETH"],
  "amount": "50.00",
  "title": "Premium Subscription",
  "description": "Monthly premium subscription payment",
  "image": "",
  "created_at": "2024-03-15T10:30:00Z",
  "expires_at": "2024-04-15T10:30:00Z",
  "slug": "premium-subscription-xyz123",
  "collect_name": true,
  "collect_email": true,
  "collect_phone": false,
  "collect_billing": false,
  "confirmation_message": "Thank you for your payment!",
  "redirect_url": "https://example.com/thank-you",
  "is_active": true,
  "call_to_action": "Subscribe Now",
  "allow_promo_codes": true,
  "available_addresses": [
    "0x1234567890abcdef1234567890abcdef12345678",
    "AbCdEfGhIjKlMnOpQrStUvWxYz1234567890"
  ],
  "customer_id": "cust_1234567890abcdef",
  "wallet_allocation_status": "completed",
  "wallet_allocation_error": null,
  "wallet_addresses": {
    "BASE": "0x12345a273bdb1ef1567f79245f0facaedcb5865",
    "ARB": "0x12345a273bdb1ef1567f79245f0facaedcb5865",
    "MATIC": "0x12345a273bdb1ef1567f79245f0facaedcb5865"
  },
  "temp_sca_wallet": "0x1234567890abcdef1234567890abcdef12345678",
  "merchant_solana_address": "AbCdEfGhIjKlMnOpQrStUvWxYz1234567890"
}

// Error Response (400 Bad Request)
{
  "error": "Payment link not found"
}`}
              </pre>
            </div>

            <div>
              <p className="font-medium">3. Payment Statistics</p>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                {`GET /payment-stats/
X-API-KEY: dshx_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
X-MERCHANT-ID: your_merchant_id`}
              </pre>
              <h4 className="text-lg font-semibold mt-4 mb-2">Response</h4>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                {`// Success Response (200 OK)
{
  "total_volume": 1250.75,
  "total_payments": 42,
  "average_payment": 29.78,
  "total_fees": 12.51,
  "unique_customers": 38,
  "payment_methods": ["SOL", "MATIC", "ARB", "ETH"],
  "daily_stats": [
    {
      "date": "2024-03-15",
      "count": 8,
      "volume": 238.50
    },
    {
      "date": "2024-03-14",
      "count": 12,
      "volume": 356.75
    },
    {
      "date": "2024-03-13",
      "count": 6,
      "volume": 179.25
    },
    {
      "date": "2024-03-12",
      "count": 9,
      "volume": 268.00
    },
    {
      "date": "2024-03-11",
      "count": 7,
      "volume": 208.25
    }
  ]
}

// Error Response (400 Bad Request)
{
  "error": "Invalid date range"
}`}
              </pre>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">Common Error Responses</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            {`// 401 Unauthorized
{
  "error": "Authentication required"
}

// 403 Forbidden
{
  "error": "Insufficient permissions"
}

// 500 Internal Server Error
{
  "error": "Internal server error"
}`}
          </pre>
        </div>
      </section>
    </div>
  );
};

export default APIKeysDocs;
