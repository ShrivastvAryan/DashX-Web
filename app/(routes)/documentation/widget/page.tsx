import Image from "next/image";
import React from "react";

const WidgetDocumentationPage = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Embed Payment Widget Documentation</h1>

      <section>
        <h2 className="text-2xl font-bold text-theme-blue">
          What is the Embed Payment Widget?
        </h2>
        <p className="mt-2 text-gray-700">
          The Embed Payment Widget allows merchants to generate a payment link
          dynamically via URL parameters and redirect customers directly to the
          payment gateway.
        </p>

         <div className="mt-6 w-full overflow-hidden rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
           <div className="relative w-full aspect-video p-4">
             <Image
               src="/documentation/widget.png"
               alt="Widget Dashboard"
               width={1200}
               height={675}
               className="rounded-lg object-contain w-full h-full"
               priority
             />
           </div>
         </div>

      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-6 text-gray-800">
          How It Works
        </h2>
        <ol className="list-decimal list-inside space-y-3 mt-4 text-gray-700">
          <li>Embed or navigate to the widget URL in your frontend.</li>
          <li>Pass required parameters as query params in the URL.</li>
          <li>The widget will auto-generate a payment link and redirect.</li>
          <li>
            If there’s an error, the widget will display a helpful message.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Widget URL Format</h2>
        <div className="bg-white p-6 rounded-lg border">
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            {`https://gateway.dashx.xyz/embed?title=<TITLE>&productName=<PRODUCT_NAME>&description=<DESCRIPTION>&amount=<AMOUNT>&expTime=<EXP_TIME>&merchantId=<MERCHANT_ID>&api_key=<API_KEY>&customer_id=<CUSTOMER_ID>&allow_promo_codes=<true|false>`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Required Parameters</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>title</strong>: Title for the payment (e.g. &quot;Order
            #123&quot;)
          </li>
          <li>
            <strong>productName</strong>: Name of the product
          </li>
          <li>
            <strong>description</strong>: Short description of the payment
          </li>
          <li>
            <strong>amount</strong>: Amount to be charged (as a string)
          </li>
          <li>
            <strong>expTime</strong>: Time until expiration (in minutes)
          </li>
          <li>
            <strong>merchantId</strong>: Your merchant ID
          </li>
          <li>
            <strong>api_key</strong>: API key for authentication
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Optional Parameters</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>allow_promo_codes</strong>: Pass <code>true</code> to enable
            promo code support, <code>false</code> or omit to disable
          </li>
          <li>
            <strong>customer_id</strong>: Your custom customer identifier for
            tracking purposes. If not provided, a unique ID will be auto-generated.
            This helps you map payments to your own customer records and is included
            in webhook notifications.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Customer ID Parameter</h2>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-gray-700 mb-3">
            The <code className="bg-blue-100 px-2 py-1 rounded">customer_id</code> parameter 
            allows you to associate payments with your own customer records:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li><strong>Optional:</strong> If not provided, a unique UUID will be auto-generated</li>
            <li><strong>Tracking:</strong> Use this to link payments to your customer database</li>
            <li><strong>Webhooks:</strong> The customer_id is included in all webhook notifications</li>
            <li><strong>Filtering:</strong> Filter payments by customer_id using the API</li>
            <li><strong>Format:</strong> Any string up to 100 characters (alphanumeric, hyphens, underscores recommended)</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Behavior</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            On valid params, a payment link is generated using{" "}
            <code>CreateEmbedPaymentLink</code>.
          </li>
          <li>
            On success, user is redirected to:{" "}
            <code>/gateway?slug=your-payment-slug</code>
          </li>
          <li>On failure, an error is displayed to the user.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Success Response (Redirect)
        </h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          {`{
  "message": "Payment link created successfully",
  "id": "pl_xxxxx",
  "slug": "unique-payment-slug",
  "link": "https://gateway.dashx.xyz/unique-payment-slug",
  "customer_id": "optional_customer_id"
}`}
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Error UI States</h2>
        <ul className="list-disc list-inside space-y-2 text-red-600">
          <li>
            Missing required parameters will show:{" "}
            <em>&quot;Invalid Link&quot;</em>
          </li>
          <li>
            Server or network failure will show a toast with the error message
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-3">Example Usage</h2>
        
        <h3 className="text-lg font-semibold mb-2">Basic Example</h3>
        <div className="bg-white p-4 rounded border mb-4">
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            {`<iframe 
  src="https://gateway.dashx.xyz/embed?title=<TITLE>&productName=<PRODUCT_NAME>&description=<DESCRIPTION>&amount=<AMOUNT>&expTime=<EXP_TIME>&merchantId=<MERCHANT_ID>&api_key=<API_KEY>" 
  width="100%" 
  height="400px" 
  frameBorder="0"
></iframe>`}
          </pre>
        </div>

        <h3 className="text-lg font-semibold mb-2">With Customer ID and Promo Codes</h3>
        <div className="bg-white p-4 rounded border">
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            {`<iframe 
  src="https://gateway.dashx.xyz/embed?title=<TITLE>&productName=<PRODUCT_NAME>&description=<DESCRIPTION>&amount=<AMOUNT>&expTime=<EXP_TIME>&merchantId=<MERCHANT_ID>&api_key=<API_KEY>&customer_id=<CUSTOMER_ID>&allow_promo_codes=<true|false>" 
  width="100%" 
  height="400px" 
  frameBorder="0"
></iframe>`}
          </pre>
        </div>

        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> Remember to URL-encode parameter values that contain spaces or special characters.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WidgetDocumentationPage;
