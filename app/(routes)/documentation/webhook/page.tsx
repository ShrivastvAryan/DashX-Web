import React from "react";
import Image from "next/image";
export default function page() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Webhook Documentation</h1>
      <section>
        <h1 className="text-2xl font-bold text-theme-blue">
          Setting Up a Webhook
        </h1>
        <p className="mt-2">
          Webhooks allow you to receive real-time updates from DashX. Follow
          these steps to set up a webhook.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-gray-800">
          How to Create a Webhook
        </h2>
        <ol className="list-decimal list-inside space-y-3 mt-4 text-gray-700">
          <li>
            Go to the <strong>DashX Dashboard</strong>.
          </li>
          <li>Login with your DashX account.</li>
          <li>
            Navigate to <strong>Webhook</strong> in the sidebar menu.
          </li>
          <li>
            Click the <strong className="">Create Webhook </strong> button
            on the top-right.
          </li>
            <div className="my-6 w-full overflow-hidden rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
              <div className="relative w-full p-4">
                <Image
                  src="/documentation/webhook.png"
                  alt="Webhook Setup Guide"
                  width={1000}
                  height={500}
                  className="rounded-lg object-contain w-full h-full"
                />
              </div>
            </div>

          <li>
            Enter the <strong>Endpoint URL</strong> and a brief description,
            then click <strong>Create</strong>.
          </li>
          <li>
            Once added, hover over the endpoint and click{" "}
            <strong>Send Test Event</strong> to verify the webhook.
          </li>
          <li className="font-bold text-red-600">
            For security, a Webhook Secret Key is generated. Store it securely
            as it will only be shown once.
          </li>
        </ol>
      </section>

      <section>
        <h1 className="text-2xl font-bold text-theme-blue">Usage of Webhook</h1>
        <p className="mt-2">
          Webhooks allow you to receive real-time updates about checkout
          sessions and other events. Once a webhook is configured, your server
          will receive structured JSON payloads whenever an event occurs.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-gray-800">
          Response from Webhook
        </h2>
        <ul className="list-disc pl-6  space-y-2 my-4 ">
          <li className="space-y-4 my-4">
            <p>
              When a checkout session is completed, your webhook URL will
              receive a<strong> POST </strong>
              request with a payload similar to this:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              {`
{
  "id": "38ea5415-d69c-4aa2-a892-588972a534d3",
  "apiVersion": "2023-01-11",
  "created": 1745405443086,
  "object": "checkoutSession",
  "type": "checkout_session.completed",
  "data": {
    "object": {
      "id": "7cf3f4cf-e39a-48b5-ad07-ea7a77c4c52d",
      "createdAt": "2025-04-23T10:50:41.449683Z",
      "amountTotal": "0.00987000",
      "status": "SUCCESS",
      "currency": "SOL",
      "customer_id": "36ab0154-0797-42",
      "payment_link_id": "d4cf04d5-0d45-4b6e-9227-011b39844aac",
      "payment_link_title": "test",
      "payment_link_slug": "sKgmsAGmRZ-aa5XOFLqZ8Q",
      "transaction_hash": "3jdxLnx5Pe22X6uBqB1Cwt6x6xtjfjh8yUnwc3667KkX43KiCroiT2rZ9b3VJ8jnMyF3LvGF2biJu3etsubHjb2t",
      "from_address": "4umonu9DZSj63cUZVvAUfLhBMDr8ad4YcAeUMBSZXUS2",
      "payment_address": "cuZFBDnPSt5J7Limwm37RedRWpNVs1xNR8XQDtWDMiN",
      "chain_symbol": "SOL",
      "payment_amount": "0.01000000",
      "payment_processing_fee": "0.00005000",
      "updatedAt": "2025-04-23T10:50:43.086043+00:00"
    }
  }
}`}
            </pre>
          </li>

          <li className="space-y-4 my-4">
            <p>
              When a checkout session is expired, your webhook URL will receive
              a<strong> POST </strong>
              request with a payload similar to this:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              {`
{
  "id": "d011c41f-a29f-4c44-b3de-64e234d8b269",
  "apiVersion": "2023-01-11",
  "created": 1742839610947,
  "object": "checkoutSession",
  "type": "checkout_session.expired",
  "data": null
}`}
            </pre>
          </li>

          <li className="space-y-4 my-4">
            <p>
              When a checkout session is canceled, your webhook URL will receive
              a<strong> POST </strong>
              request with a payload similar to this:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              {`
{
  "id": "d011c41f-a29f-4c44-b3de-64e234d8b269",
  "apiVersion": "2023-01-11",
  "created": 1742839610947,
  "object": "checkoutSession",
  "type": "checkout_session.canceled",
  "data":null
}`}
            </pre>
          </li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mt-6">
          <p className="text-blue-700 font-medium">
            <span className="font-bold">Tip:</span> You can use the <code className="bg-blue-100 px-2 py-1 rounded">payment_link_slug</code> from the webhook response to verify the transaction status through the API. This is especially useful when you need to confirm payment details or perform additional checks after receiving a webhook event.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 text-gray-800">
          Handling Webhooks in Your Application
        </h2>

        <p className="mt-2 text-gray-700">
          Webhooks allow your server to listen for real-time payment events.
          When a checkout session is completed, your webhook URL will receive a
          <strong className="text-blue-600"> POST </strong> request containing
          transaction details. Below are examples of how to handle webhook
          events in Python and JavaScript.
        </p>
        <div className="mt-4 space-y-4">
          <h4 className="font-semibold text-gray-800">
            🔹 Python Example (Flask)
          </h4>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>
              {`from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    data = request.json
    if data["type"] == "checkout_session.completed":
        print("Payment successful:", data["data"]["object"])
    return jsonify({"status": "received"}), 200

if __name__ == '__main__':
    app.run(port=5000)`}
            </code>
          </pre>
        </div>

        {/* JavaScript Example */}
        <div className="mt-4 space-y-4">
          <h4 className="font-semibold text-gray-800">
            🔹 JavaScript Example (Express.js)
          </h4>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>
              {`const express = require("express");
const app = express();

app.use(express.json());

app.post("/webhook", (req, res) => {
  const data = req.body;
  if (data.type === "checkout_session.completed") {
    console.log("Payment successful:", data.data.object);
  }
  res.json({ status: "received" });
});

app.listen(5000, () => console.log("Webhook server running on port 5000"));`}
            </code>
          </pre>
        </div>
      </section>
      <p className="mt-4 text-lg font-bold text-red-600">
        Note: Only <strong className="">5 webhooks</strong> are allowed per merchant
      </p>
    </div>
  );
}
