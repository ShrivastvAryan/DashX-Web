import React from "react";

const ExamplesDocs = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Integration Examples</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-600">
          This section provides practical examples of how to integrate with the
          DashX platform using different programming languages and frameworks.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Python Examples</h2>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-3">
            Creating a Payment Link
          </h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            {`import requests
from datetime import datetime, timedelta

BASE_URL = "https://beprod.dashx.xyz"
API_KEY = "your_api_key_here"

def create_payment_link():
    headers = {
        "X-API-KEY": API_KEY,
        "X-MERCHANT-ID": "your_merchant_id"
    }
    payment_data = {
        link_type: 'FIXED',
        token: 'USDC',
        accepted_chain_symbols: ["SOL", "MATIC", "ARB", "ETH"],
        amount: '10.00',
        title: 'Payment Title',
        description: 'Payment Description',
        collect_email: true,
        customer_id: 'your_customer_id',
        merchant: 'your_merchant_id',
        expires_at: 'xyz' //optional(Original ISO 8601 format) 
    }
    response = requests.post(f"{BASE_URL}/payment-link/", 
                          json=payment_data, 
                          headers=headers)
    return response.json()

# Create a payment link
payment_link = create_payment_link()
print(f"Payment link created: {payment_link}")

# Example Response:
{
    "message": "Payment link created successfully",
    "id": "payment_id",
    "slug": "payment_slug",
    "link": "https://gateway.dashx.xyz/payment_slug",
    "customer_id": "your_customer_id"
}`}
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Verifying a Transaction
          </h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            {`def verify_transaction(payment_link_slug, tx_hash):
    headers = {
        "X-API-KEY": API_KEY,
        "X-MERCHANT-ID": "your_merchant_id"
    }
    data = {
        "payment_link_slug": payment_linkslug,
        "tx_hash": tx_hash
    }
    response = requests.post(
        f"{BASE_URL}/payment-verification/verify-and-update/",
        json=data,
        headers=headers
    )
    return response.json()

# Verify a transaction
result = verify_transaction("premium-subscription-xyz123", "0xabcdef123456...")
print(f"Transaction verification result: {result}")

# Example Response:
{
   "verified": true,
   "payment_link_slug": "premium-subscription-xyz123",
   "tx_hash": "0x6c54a1f423dbb51bcfb89b...",
   "chain": "ETH",
   "db_status": "COMPLETED",
   "blockchain_status": "CONFIRMED",
   "expected_to_address": "0x1234567890abcdef1234567890abcdef12345678",
   "account_keys": "0x89ab4f537b6cbb9ad3a9d64b56e48e7cc1290d57",
   "block_time": 1710841500,
   "fee": 0.001,
   "transaction_error": null,
   "address_match": true,
   "token_transfers": 1
}`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">JavaScript Examples</h2>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-3">
            Creating a Payment Link
          </h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            {`const axios = require('axios');

const BASE_URL = 'https://beprod.dashx.xyz';
const API_KEY = 'your_api_key_here';

async function createPaymentLink() {
    const headers = { 
        'X-API-KEY': API_KEY,
        'X-MERCHANT-ID': 'your_merchant_id'
    };
    const paymentData = {
        link_type: 'FIXED',
        token: 'USDC',
        accepted_chain_symbols: ["SOL", "MATIC", "ARB", "ETH"],
        amount: '50.00',
        title: 'Premium Subscription',
        description: 'Monthly premium subscription payment',
        collect_email: true,
        customer_id: 'cust_1234567890abcdef',
        merchant: 'merch_1234567890abcdef'
        expires_at: 'xyz' //optional(Original ISO 8601 format) 
    };

    try {
        const response = await axios.post(
            \`\${BASE_URL}/payment-link/\`,
            paymentData,
            { headers }
        );
        return response.data;
    } catch (error) {
        console.error('Error creating payment link:', error);
        throw error;
    }
}

// Create a payment link
createPaymentLink()
    .then(result => console.log('Payment link created:', result))
    .catch(error => console.error('Failed to create payment link:', error));

// Example Response:
{
    "message": "Payment link created successfully",
    "id": "payment_id",
    "slug": "payment_slug",
    "link": "https://gateway.dashx.xyz/payment_slug",
    "customer_id": "your_customer_id"
}`}
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Getting Payment Statistics
          </h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            {`async function getPaymentStats() {
    const headers = {
        'X-API-KEY': API_KEY,
        'X-MERCHANT-ID': 'your_merchant_id'
    };

    try {
        const response = await axios.get(
            \`\${BASE_URL}/payment-stats/\`,
            { headers }
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching payment stats:', error);
        throw error;
    }
}

// Get payment statistics
getPaymentStats()
    .then(stats => console.log('Payment statistics:', stats))
    .catch(error => console.error('Failed to fetch payment stats:', error));

// Example Response:
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
}`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          React Integration Example
        </h2>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            {`import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = () => {
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        const headers = { 
            'X-API-KEY': API_KEY,
            'X-MERCHANT-ID': 'your_merchant_id'
        };
        try {
            const response = await axios.post('/payment-link', {
              link_type: 'FIXED',
              token: 'USDC',
              accepted_chain_symbols: ["SOL", "MATIC", "ARB", "ETH"],
              amount: '10.00',
              title: 'Payment Title',
              description: 'Payment Description',
              collect_email: true,
              customer_id: 'your_customer_id',
              merchant: 'your_merchant_id'
              expires_at: 'xyz' //optional(Original ISO 8601 format) 
    }, { headers });

        } catch (err) {
            setError('Failed to create payment. Please try again.');
            console.error('Payment creation error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Amount (USDC)
                </label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    required
                    min="0"
                    step="0.01"
                />
            </div>

            {error && (
                <div className="text-red-600 text-sm">{error}</div>
            )}

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
                {loading ? 'Creating Payment...' : 'Pay Now'}
            </button>
        </form>
    );
};

export default PaymentForm;`}
          </pre>
        </div>
      </section>
    </div>
  );
};

export default ExamplesDocs;
