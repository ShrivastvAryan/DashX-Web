import React from "react";
import Link from "next/link";

const DocumentationOverview = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Documentation Overview</h1>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold mb-4 text-theme-blue">
          Welcome to DashX Gateway
        </h2>
        <p className="text-gray-600">
          Start accepting crypto payments effortlessly Welcome to the ultimate
          guide for DashX Gateway, where we make on-chain cryptocurrency
          payments seamless and efficient! DashX Gateway empowers merchants to
          accept cryptocurrency with ease through a simple API or an intuitive
          user interface. Built on blockchain technology, it ensures secure,
          instant, and borderless transactions, allowing customers to pay from
          anywhere using their preferred crypto assets.
        </p>
        <p className="text-gray-600">
          This documentation will guide you through integrating with DashX
          Gateway payment platform. Whether you are a merchant looking to accept
          payments or a developer building payment solutions, you will find
          everything you need here.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold mb-4 text-theme-blue">
          Key Advantages for Merchants and Customers with DashX Gateway
        </h2>
        <ul className="list-decimal list-inside space-y-3 text-gray-700">
          <li className="text-gray-600">
            <span className="font-bold pr-2">Multi-Chain Support:</span>
            Expand your reach by accepting payments across multiple blockchains,
            including Ethereum, Solana, Arbitrum, and Polygon.
          </li>
          <li className="text-gray-600 pr-2">
            <span className="font-bold pr-2">Non-Custodial Security:</span>
            Maintain full control over your assets only, ensuring maximum
            security.
          </li>
          <li className="text-gray-600">
            <span className="font-bold pr-2">
              Wide Cryptocurrency Acceptance:
            </span>
            Our on-chain payment infrastructure enables seamless transactions
            with a variety of cryptocurrencies, serving a global customer base.
          </li>
          {/* <li className="text-gray-600">
            <span className="font-bold pr-2">Built-in Tax & Discounts:</span>
            Simplify your sales process with integrated tax calculations and
            promo code support, enhancing the checkout experience.
          </li>
          <li className="text-gray-600">
            <span className="font-bold pr-2">
              Subscription & Recurring Payments:
            </span>
            Automate billing for memberships, SaaS, and other subscription-based
            services with ease.
          </li> */}
          <li className="text-gray-600">
            <span className="font-bold pr-2">
              Instant Blockchain Settlements:
            </span>
            Get paid directly to your wallet without delays, eliminating market
            volatility risks.
          </li>
          <li className="text-gray-600">
            <span className="font-bold pr-2">
              Wallet-Agnostic Compatibility:
            </span>
            DashX Gateway works seamlessly with all wallet
            types—multi-signature, self-custody, and custodial services—
            offering you complete flexibility.
          </li>
        </ul>
        <p className="font-bold">
          Unlock the full potential of crypto payments with DashX Gateway and
          redefine your payment experience today!
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">API Keys</h3>
            <p className="text-gray-600 mb-4">
              Learn how to generate and manage your API keys for secure
              authentication.
            </p>
            <Link
              href="/documentation/api-keys"
              className="text-theme-blue hover:text-blue-800"
            >
              View API Keys Documentation →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">Supported Chains</h3>
            <p className="text-gray-600 mb-4">
              Explore the blockchain networks supported by our platform.
            </p>
            <Link
              href="/documentation/supported-chains"
              className="text-theme-blue hover:text-blue-800"
            >
              View Supported Chains →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">Rate Limiting</h3>
            <p className="text-gray-600 mb-4">
              Understand our rate limiting policies and how to handle them.
            </p>
            <Link
              href="/documentation/rate-limiting"
              className="text-theme-blue hover:text-blue-800"
            >
              View Rate Limiting Documentation →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">
              Security Best Practices
            </h3>
            <p className="text-gray-600 mb-4">
              Learn about security best practices for integrating with our
              platform.
            </p>
            <Link
              href="/documentation/security"
              className="text-theme-blue hover:text-blue-800"
            >
              View Security Documentation →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">
              Examples for Integration
            </h3>
            <p className="text-gray-600 mb-4">
              Ensure seamless and secure integration with our platform by
              following industry best practices.
            </p>
            <Link
              href="/documentation/examples"
              className="text-theme-blue hover:text-blue-800"
            >
              View Integration Examples →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">Webhook</h3>
            <p className="text-gray-600 mb-4">
              Integrate webhooks securely with our platform by following best
              practices.
            </p>
            <Link
              href="/documentation/webhook"
              className="text-theme-blue hover:text-blue-800"
            >
              View Webhook Documentation →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold">Subscription Payments</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Set up recurring subscription payments with automated billing on supported chains.
            </p>
            <Link
              href="/documentation/subscription"
              className="text-theme-blue hover:text-blue-800"
            >
              View Subscription Documentation →
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
        <p className="text-gray-600">
          If you need assistance or have questions, our support team is here to
          help. Contact us at{" "}
          <a
            href="mailto:business@dashx.xyz"
            className="text-theme-blue hover:text-blue-800"
          >
            business@dashx.xyz
          </a>
        </p>
      </section>
    </div>
  );
};

export default DocumentationOverview;
