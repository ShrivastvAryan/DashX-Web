import React from "react";
import Image from "next/image";


const SubscriptionDocs = () => {
  return (
    <div className="space-y-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">Recurring Payments (Subscriptions)</h1>
      </div>

      {/* <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-lg mb-8">
        <p className="text-blue-700 font-medium text-sm sm:text-base">
          <span className="font-bold">Beta Feature:</span> The subscription payment system is currently in beta. The feature supports automated recurring payments on EVM-compatible chains.
        </p>
      </div> */}

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-theme-blue">
          Overview
        </h2>
        <p className="mt-2 text-gray-700 text-sm sm:text-base">
          DashX Subscriptions enable merchants to create recurring payment links for subscription-based services. Customers approve an allowance once, and the system automatically processes recurring charges at specified intervals.
        </p>

           <div className="bg-white p-6 rounded-lg mt-3 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative w-full h-64 mb-4">
                      <Image
                        src="/documentation/subs.png"
                        alt="Subscription Interface"
                        fill
                        className="object-contain rounded-md"
                        priority
                      />
                    </div>
                  </div>
        
        <div className="mt-6 bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-3">How It Works</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Merchant creates a Payment Link with <code className="bg-gray-100 px-2 py-1 rounded">link_type: &quot;SUBSCRIPTION&quot;</code></li>
            <li>Customer visits the payment gateway link and subscribes by connecting their wallet</li>
            <li>Customer approves token allowance for the subscription amount × duration</li>
            <li>Subscription is automatically created and activated in the system</li>
            <li>Backend automatically processes recurring charges at the specified interval</li>
            <li>Webhook events are dispatched after each successful charge</li>
          </ol>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Supported Chains</h2>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            Subscription payments are currently supported on the following EVM-compatible chains:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
              <span className="font-semibold text-gray-800">BASE</span>
              <span className="text-sm text-gray-600"> Base</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
              <span className="font-semibold text-gray-800">ARB</span>
              <span className="text-sm text-gray-600">Arbitrum</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
              <span className="font-semibold text-gray-800">POL</span>
              <span className="text-sm text-gray-600">Polygon</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            <strong>Note:</strong> Currently, only USDC is supported as the payment currency for subscriptions. You can use &quot;POL&quot; or &quot;MATIC&quot; interchangeably for Polygon.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">API Endpoints</h2>

        <div className="space-y-8">
          {/* Create Payment Link for Subscription */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              1. Create Subscription Payment Link (Merchant)
            </h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              First, create a payment link with subscription type to enable recurring payments.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <code className="text-sm">POST https://beprod.dashx.xyz/payment-link/</code>
            </div>

            <h4 className="font-semibold mb-2 text-gray-800">Headers</h4>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`{
  "X-API-KEY": "your_api_key",
  "X-MERCHANT-ID": "your_merchant_id",
  "Content-Type": "application/json"
}`}
            </pre>

            <h4 className="font-semibold mb-2 text-gray-800">Request Body</h4>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`{
  "link_type": "SUBSCRIPTION",
  "token": "USDC",
  "accepted_chain_symbols": ["ETH", "POL", "ARB"],
  "amount": "10.00",
  "title": "Premium Membership",
  "description": "Monthly premium subscription",
  "merchant": "your_merchant_wallet_id",
  "subscription_frequency": "MONTHLY",
  "subscription_interval": 1,
  "subscription_duration": 12,
  "collect_email": true,
  "customer_id": "customer_123"
}`}
            </pre>

            <h4 className="font-semibold mb-2 text-gray-800">Parameters</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold">Field</th>
                    <th className="px-4 py-2 text-left font-semibold">Type</th>
                    <th className="px-4 py-2 text-left font-semibold">Required</th>
                    <th className="px-4 py-2 text-left font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 font-sans text-xs">link_type</td>
                    <td className="px-4 py-2">string</td>
                    <td className="px-4 py-2">Yes</td>
                    <td className="px-4 py-2">Must be &quot;SUBSCRIPTION&quot;</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-sans text-xs">amount</td>
                    <td className="px-4 py-2">string</td>
                    <td className="px-4 py-2">Yes</td>
                    <td className="px-4 py-2">Amount to charge per interval (in USDC)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-sans text-xs">token</td>
                    <td className="px-4 py-2">string</td>
                    <td className="px-4 py-2">Yes</td>
                    <td className="px-4 py-2">Currently only &quot;USDC&quot; is supported</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-sans text-xs">accepted_chain_symbols</td>
                    <td className="px-4 py-2">array</td>
                    <td className="px-4 py-2">Yes</td>
                    <td className="px-4 py-2">Supported chains: [&quot;ETH&quot;, &quot;ARB&quot;, &quot;POL&quot;]. Use &quot;POL&quot; or &quot;MATIC&quot; for Polygon</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-sans text-xs">subscription_frequency</td>
                    <td className="px-4 py-2">string</td>
                    <td className="px-4 py-2">Yes</td>
                    <td className="px-4 py-2">Options: &quot;HOURLY&quot;, &quot;DAILY&quot;, &quot;WEEKLY&quot;, &quot;MONTHLY&quot;, &quot;QUARTERLY&quot;, &quot;SEMI_ANNUALLY&quot;, &quot;YEARLY&quot;, &quot;CUSTOM&quot;</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-sans text-xs">subscription_interval</td>
                    <td className="px-4 py-2">number</td>
                    <td className="px-4 py-2">Yes</td>
                    <td className="px-4 py-2">Interval value (e.g., 2 for every 2 months). Min: 1</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-sans text-xs">subscription_duration</td>
                    <td className="px-4 py-2">number</td>
                    <td className="px-4 py-2">Yes</td>
                    <td className="px-4 py-2">Total duration in frequency units. Min: 1</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-sans text-xs">title</td>
                    <td className="px-4 py-2">string</td>
                    <td className="px-4 py-2">Yes</td>
                    <td className="px-4 py-2">Title of the subscription</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-sans text-xs">description</td>
                    <td className="px-4 py-2">string</td>
                    <td className="px-4 py-2">No</td>
                    <td className="px-4 py-2">Description of the subscription</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-sans text-xs">merchant</td>
                    <td className="px-4 py-2">string</td>
                    <td className="px-4 py-2">Yes</td>
                    <td className="px-4 py-2">Merchant wallet ID</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-sans text-xs">customer_id</td>
                    <td className="px-4 py-2">string</td>
                    <td className="px-4 py-2">No</td>
                    <td className="px-4 py-2">Optional customer identifier</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-sans text-xs">collect_email</td>
                    <td className="px-4 py-2">boolean</td>
                    <td className="px-4 py-2">No</td>
                    <td className="px-4 py-2">Whether to collect customer email</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-semibold mb-2 text-gray-800 mt-4">Response (201 Created)</h4>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`{
  "message": "Payment link created successfully",
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "slug": "premium-membership-xyz123",
  "link": "https://gateway.dashx.xyz/gateway?slug=premium-membership-xyz123",
  "customer_id": "your_customer_id"
}`}
            </pre>
          </div>

          {/* Customer Subscription Flow */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              2. Customer Subscribes (Gateway)
            </h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Customers subscribe by visiting the payment gateway link (not via API). The subscription is automatically created when they approve the token allowance through the gateway interface.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-blue-700 text-sm">
                <strong>Gateway Flow:</strong> Customer visits <code className="bg-blue-100 px-2 py-1 rounded">https://gateway.dashx.xyz/gateway?slug=your-link-slug</code> → Connects wallet → Approves allowance → Subscription created automatically
              </p>
            </div>

            <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
              <p className="text-yellow-700 text-sm">
                <strong>Note:</strong> Direct subscription creation via API is not supported. All subscriptions must be created through the payment gateway interface.
              </p>
            </div>
          </div>

          {/* Check Payment Status */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              3. Check Subscription Payment Status (Merchant)
            </h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Check the status of a subscription payment after allowance approval.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <code className="text-sm">POST https://beprod.dashx.xyz/subscriptions/check-payment-status/</code>
            </div>

            <h4 className="font-semibold mb-2 text-gray-800">Request Body</h4>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`{
  "slug": "premium-membership-xyz123",
  "wallet_address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
  "subscription_id": "sub_xyz123abc456"
}`}
            </pre>

            <h4 className="font-semibold mb-2 text-gray-800 mt-4">Response (200 OK)</h4>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`{
  "status": "COMPLETED",
  "payment_id": "pay_abc123def456",
  "transaction_hash": "0x9876543210fedcba9876543210fedcba98765432...",
  "payment_date": "2024-10-14T12:05:30Z",
  "amount": "10.00",
  "subscription_status": "ACTIVE"
}`}
            </pre>

            <h4 className="font-semibold mb-2 text-gray-800 mt-4">Status Values</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
              <li><code className="bg-gray-100 px-2 py-1 rounded">PENDING</code> - Payment is being processed</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">COMPLETED</code> - Payment successful</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">SUCCESS</code> - Payment successful (alternative status)</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">FAILED</code> - Payment failed</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">EXPIRED</code> - Payment window expired</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">CANCELED</code> - Payment canceled</li>
            </ul>
          </div>

          {/* Cancel Subscription */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              4. Cancel Subscription (Merchant)
            </h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Cancel an active subscription to prevent future charges. <strong>Requires merchant authentication via API key.</strong>
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <code className="text-sm">POST https://beprod.dashx.xyz/subscriptions/{`{subscription_id}`}/cancel/</code>
            </div>

            <h4 className="font-semibold mb-2 text-gray-800">Headers</h4>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`{
  "X-API-KEY": "your_api_key",
  "X-MERCHANT-ID": "your_merchant_id",
  "Content-Type": "application/json"
}`}
            </pre>

            <h4 className="font-semibold mb-2 text-gray-800 mt-4">Response (200 OK)</h4>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`{
  "status": "canceled",
  "message": "Subscription canceled successfully",
  "subscription_id": "f163d936-fa61-4b22-9085-478e6ff4fcf2"
}`}
            </pre>

            <h4 className="font-semibold mb-2 text-gray-800 mt-4">Error Responses</h4>
            <div className="space-y-2 text-sm">
              <p><strong>401 Unauthorized:</strong> Missing or invalid API key</p>
              <p><strong>404 Not Found:</strong> Subscription not found</p>
              <p><strong>403 Forbidden:</strong> Not authorized to cancel this subscription (must be the merchant)</p>
              <p><strong>400 Bad Request:</strong> Subscription is already canceled</p>
            </div>

            <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-blue-700 text-sm">
                <strong>Note:</strong> Only the merchant who created the subscription can cancel it. Customers cannot currently cancel their own subscriptions through the API - they must contact the merchant.
              </p>
            </div>
          </div>

          {/* List Subscriptions */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              5. List Subscriptions (Merchant)
            </h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Retrieve subscriptions for a customer wallet or merchant. <strong>Requires merchant authentication via API key.</strong>
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <code className="text-sm">GET https://beprod.dashx.xyz/subscriptions/?customer_wallet=0x...</code>
            </div>

            <h4 className="font-semibold mb-2 text-gray-800">Headers</h4>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`{
  "X-API-KEY": "your_api_key",
  "X-MERCHANT-ID": "your_merchant_id"
}`}
            </pre>

            <h4 className="font-semibold mb-2 text-gray-800">Query Parameters</h4>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold">Parameter</th>
                    <th className="px-4 py-2 text-left font-semibold">Type</th>
                    <th className="px-4 py-2 text-left font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                  <td className="px-4 py-2 font-sans text-xs">customer_wallet</td>
                    <td className="px-4 py-2">string</td>
                    <td className="px-4 py-2">Filter by customer wallet address</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-semibold mb-2 text-gray-800 mt-4">Response (200 OK)</h4>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`[
  {
    "id": "sub_xyz123abc456",
    "payment_link": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "customer_wallet": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    "start_date": "2024-10-14T12:00:00Z",
    "end_date": "2025-10-14T12:00:00Z",
    "next_charge_date": "2024-11-14T12:00:00Z",
    "frequency": "MONTHLY",
    "interval": 1,
    "total_cycles": null,
    "cycles_completed": 1,
    "duration": 12,
    "status": "ACTIVE",
    "allowance_data": {
      "spender": "0x1234567890abcdef1234567890abcdef12345678",
      "token": "USDC",
      "amount": "10.00"
    },
    "last_tx_hash": "0x9876543210fedcba9876543210fedcba98765432...",
    "last_payment_date": "2024-10-14T12:05:30Z",
    "failed_attempts": 0,
    "max_failed_attempts": 3
  }
]`}
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Integration Example</h2>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-3">Complete Subscription Flow</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`import axios from 'axios';

const BASE_URL = 'https://beprod.dashx.xyz';
const API_KEY = 'your_api_key';
const MERCHANT_ID = 'your_merchant_id';

// Step 1: Merchant creates a subscription payment link
async function createSubscriptionLink() {
  const response = await axios.post(
    \`\${BASE_URL}/payment-link/\`,
    {
      link_type: 'SUBSCRIPTION',
      token: 'USDC',
      accepted_chain_symbols: ['POL', 'ARB', 'ETH'],
      amount: '10.00',
      title: 'Premium Membership',
      description: 'Monthly premium subscription',
      merchant: MERCHANT_ID,
      subscription_frequency: 'MONTHLY',
      subscription_interval: 1,
      subscription_duration: 12,
      collect_email: true
    },
    {
      headers: {
        'X-API-KEY': API_KEY,
        'X-MERCHANT-ID': MERCHANT_ID,
        'Content-Type': 'application/json'
      }
    }
  );
  
  return response.data;
}

// Step 2: Customer visits gateway and subscribes
// The customer visits: https://gateway.dashx.xyz/gateway?slug={paymentLink.slug}
// They connect their wallet and approve the token allowance through the UI
// The subscription is automatically created when they approve the allowance

// Step 3: Merchant checks payment status
async function checkPaymentStatus(slug, walletAddress, subscriptionId) {
  const response = await axios.post(
    \`\${BASE_URL}/subscriptions/check-payment-status/\`,
    {
      slug: slug,
      wallet_address: walletAddress,
      subscription_id: subscriptionId
    }
  );
  
  return response.data;
}

// Step 4: Merchant lists customer subscriptions
async function listCustomerSubscriptions(customerWallet) {
  const response = await axios.get(
    \`\${BASE_URL}/subscriptions/?customer_wallet=\${customerWallet}\`,
    {
      headers: {
        'X-API-KEY': API_KEY,
        'X-MERCHANT-ID': MERCHANT_ID
      }
    }
  );
  
  return response.data;
}

// Step 5: Merchant cancels subscription (if needed)
async function cancelSubscription(subscriptionId) {
  const response = await axios.post(
    \`\${BASE_URL}/subscriptions/\${subscriptionId}/cancel/\`,
    {},
    {
      headers: {
        'X-API-KEY': API_KEY,
        'X-MERCHANT-ID': MERCHANT_ID,
        'Content-Type': 'application/json'
      }
    }
  );
  
  return response.data;
}

// Example usage
async function main() {
  // Merchant creates payment link
  const paymentLink = await createSubscriptionLink();
  console.log('Payment link created:', paymentLink.slug);
  console.log('Share this link with customers:', paymentLink.link);
  
  // Customer visits the gateway link and subscribes (happens in browser UI)
  // After customer subscribes, merchant can list their subscriptions
  const customerWallet = '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb';
  const subscriptions = await listCustomerSubscriptions(customerWallet);
  console.log('Customer subscriptions:', subscriptions);
  
  // If merchant needs to cancel a subscription
  if (subscriptions.length > 0) {
    const result = await cancelSubscription(subscriptions[0].id);
    console.log('Cancellation result:', result);
  }
}

main();`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Subscription Status Types</h2>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">Status</th>
                  <th className="px-4 py-2 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 font-sans text-xs">ACTIVE</td>
                  <td className="px-4 py-2">Subscription is active and charges will be processed</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-sans text-xs">PAUSED</td>
                  <td className="px-4 py-2">Subscription temporarily paused</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-sans text-xs">CANCELED</td>
                  <td className="px-4 py-2">Subscription canceled, no future charges</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-sans text-xs">COMPLETED</td>
                  <td className="px-4 py-2">All cycles completed successfully</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-sans text-xs">PAST_DUE</td>
                  <td className="px-4 py-2">Payment failed after multiple attempts</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-sans text-xs">FAILED</td>
                  <td className="px-4 py-2">Subscription creation or processing failed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Webhook Events</h2>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            DashX sends webhook events to your configured endpoint for subscription-related events. Each webhook includes an HMAC signature for verification.
          </p>

          <h3 className="text-lg font-semibold mb-3">Event Types</h3>
          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-green-700">checkout_session.completed</h4>
              <p className="text-sm text-gray-600">Triggered when a subscription payment is successfully processed</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-red-700">checkout_session.canceled</h4>
              <p className="text-sm text-gray-600">Triggered when a subscription payment fails after maximum retry attempts</p>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-3">Webhook Payload Format</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`{
  "id": "evt_1a2b3c4d5e6f",
  "apiVersion": "2023-01-11",
  "created": 1697234567000,
  "object": "checkoutSession",
  "type": "checkout_session.completed",
  "data": {
    "object": {
      "id": "pay_abc123def456",
      "createdAt": "2024-10-14T12:05:30Z",
      "amountTotal": "10.00",
      "status": "SUCCESS",
      "currency": "USDC",
      "customer_id": "customer_123",
      "payment_link_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "payment_link_title": "Premium Membership",
      "payment_link_slug": "premium-membership-xyz123",
      "transaction_hash": "0x9876543210fedcba9876543210fedcba98765432...",
      "from_address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
      "payment_address": "0xd0dd2d1f25b3efdb24bdb224be2d65cd98b5a975",
      "chain_symbol": "ARB",
      "payment_amount": "10.00",
      "payment_processing_fee": "0.00",
      "updatedAt": "2024-10-14T12:05:35Z"
    }
  }
}`}
          </pre>

          <h3 className="text-lg font-semibold mb-3">Webhook Headers</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`{
  "Content-Type": "application/json",
  "X-DashX-Signature": "t=1697234567000,v1=abc123def456..."
}`}
          </pre>

          <h3 className="text-lg font-semibold mb-3">Verifying Webhook Signatures</h3>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            Always verify the webhook signature to ensure the request is from DashX:
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`import hmac
import hashlib

def verify_webhook_signature(payload, signature_header, webhook_secret):
    # Extract timestamp and signature from header
    parts = signature_header.split(',')
    timestamp = parts[0].split('=')[1]
    signature = parts[1].split('=')[1]
    
    # Create HMAC signature
    expected_signature = hmac.new(
        webhook_secret.encode(),
        payload.encode(),
        hashlib.sha256
    ).hexdigest()
    
    # Compare signatures
    return hmac.compare_digest(signature, expected_signature)

# Usage in your webhook endpoint
@app.post('/webhook')
def handle_webhook(request):
    payload = request.body.decode('utf-8')
    signature = request.headers.get('X-DashX-Signature')
    webhook_secret = 'your_webhook_secret'
    
    if not verify_webhook_signature(payload, signature, webhook_secret):
        return {'error': 'Invalid signature'}, 401
    
    event = json.loads(payload)
    
    if event['type'] == 'checkout_session.completed':
        # Handle successful subscription payment
        payment_data = event['data']['object']
        print(f"Payment {payment_data['id']} completed for {payment_data['amountTotal']} {payment_data['currency']}")
    
    elif event['type'] == 'checkout_session.canceled':
        # Handle failed subscription payment
        payment_data = event['data']['object']
        print(f"Payment {payment_data['id']} failed after max retries")
    
    return {'received': True}, 200`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Important Notes</h2>
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Customers must approve sufficient token allowance before the first payment</li>
            <li>The system automatically processes charges at the specified interval</li>
            <li>Webhook events are dispatched after each successful charge (<code className="bg-gray-100 px-2 py-1 rounded">checkout_session.completed</code>)</li>
            <li>If a charge fails, the subscription remains ACTIVE and will be retried</li>
            <li>After max failed attempts (default: 3), subscription status changes to FAILED and a <code className="bg-gray-100 px-2 py-1 rounded">checkout_session.canceled</code> webhook is sent</li>
            <li>Always verify webhook signatures to ensure authenticity</li>
            <li>Currently, only EVM-compatible chains (BASE, ARB, POL) are supported</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Support</h2>
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
          <p className="text-gray-700 text-sm sm:text-base">
            For questions or assistance with subscription payments, contact our support team at <strong className="text-blue-600">business@dashx.xyz</strong>.
          </p>
        </div>
      </section>

      {/* <div className="bg-orange-50 border-l-4 border-orange-500 p-4 sm:p-6 rounded-lg mt-8">
        <p className="text-orange-700 font-medium text-sm sm:text-base">
          <span className="font-bold">Beta Notice:</span> This feature is in active development. API endpoints and functionality may change. We recommend thorough testing before production use.
        </p>
      </div> */}
    </div>
  );
};

export default SubscriptionDocs;
