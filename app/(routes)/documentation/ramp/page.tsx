import React from "react";
import Image from "next/image";

const RampDocs = () => {
  return (
    <div className="space-y-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold">Ramp System Documentation</h1>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-lg mb-8">
        <p className="text-blue-700 font-medium text-sm sm:text-base">
          <span className="font-bold">Coming Soon:</span> The DashX OnRamp feature is currently in final development and will be launching soon. This documentation provides an overview of the upcoming functionality.
        </p>
      </div>

      <section>
        <h1 className="text-xl sm:text-2xl font-bold text-theme-blue">
          Seamless Crypto-Fiat Conversions
        </h1>
        <p className="mt-2 text-gray-700 text-sm sm:text-base">
          The DashX Ramp System provides a seamless interface for users to convert between fiat currencies and cryptocurrencies. With support for multiple fiat currencies, blockchain networks, and payment methods, users can easily move funds between traditional and digital financial systems.
        </p>
        
        {/* Improved image showcase with better layout */}
        <div className="mt-6 grid grid-cols-1 gap-6">
          {/* <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">On-Ramp</h3>
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/on-ramp.png"
                alt="On-Ramp Interface"
                fill
                className="object-contain rounded-md"
                priority
              />
            </div>
            <p className="text-sm text-gray-600">Buy crypto with fiat currencies through our intuitive on-ramp interface</p>
          </div> */}
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Off-Ramp</h3>
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/offramp.png"
                alt="Off-Ramp Interface"
                fill
                className="object-contain rounded-md"
                priority
              />
            </div>
            <p className="text-sm text-gray-600">Convert your crypto back to fiat currencies with our streamlined off-ramp service</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Key Features</h2>
        
        <div className="space-y-6">
          {/* <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">1. Onramp Services</h3>
             <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Allows users to buy cryptocurrencies using fiat money:
            </p> 
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Fiat currency support INR.</li>
              <li>Country-specific payment methods (UPI, IMPS, Bank Transfer)</li>
              <li>Visual currency flags and symbols for clear selection</li>
              <li>Flexible wallet integration options (connect existing wallet or manual address input)</li>
              <li>Transaction tracking with real-time status updates</li>
            </ul>
          </div> */}

          <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">2. Offramp Services</h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Enables users to sell cryptocurrencies and receive fiat money:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Support for various cryptocurrencies (POL,SOL,ARB, USDC/USDT, etc.)</li>
              {/* <li>Multiple blockchain network compatibility</li> */}
              <li>Bank account transfers for fiat payouts</li>
              {/* <li>Country-specific banking system support</li> */}
              <li>Bank account management with saved details for repeat usage</li>
              <li>Complete transaction status tracking</li>
            </ul>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">3. Common Features</h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Features available across both onramp and offramp services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
              {/* <li>Token selection with support for major cryptocurrencies</li> */}
              <li>Real-time quotes with debounced input to prevent excessive API calls</li>
              <li>Transparent fee breakdown for all transactions</li>
              <li>Multiple blockchain network support (POL,ARB, SOL)</li>
              <li>User-friendly interface with clear instructions</li>
            </ul>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">4. Security Features</h3>
            <div className="space-y-4">
              <p className="text-gray-700 text-sm sm:text-base">
                Comprehensive security measures to protect user transactions:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
                <li>Wallet address verification to ensure valid cryptocurrency addresses</li>
                <li>KYC integration with prompt for verification when required</li>
                <li>Transaction limits with minimum and maximum amount enforcement</li>
                <li>Secure storage of wallet addresses and bank details (optional)</li>
                <li>Encrypted communication for all sensitive data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Transaction Flows</h2>
        <div className="space-y-4">
          {/* <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Onramp Process</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Select cryptocurrency token and network</li>
              <li>Enter fiat amount to convert</li>
              <li>View conversion rate and fee breakdown</li>
              <li>Provide or connect wallet address</li>
              <li>Receive payment instructions (UPI, IMPS, bank transfer details)</li>
              <li>Complete payment using preferred method</li>
              <li>Track transaction status in real-time</li>
            </ol>
          </div> */}

          <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Offramp Process</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Select cryptocurrency and network to sell</li>
              <li>Enter crypto amount</li>
              <li>View conversion rate and fees</li>
              <li>Select fiat currency for payout</li>
              <li>Provide or select saved bank account details</li>
              <li>Send cryptocurrency from wallet</li>
              <li>Track withdrawal status through the offramp process</li>
            </ol>
          </div>
        </div>
      </section>

      <section>
        {/* <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Supported Payment Methods</h2> */}
        
        {/* Improved payment methods layout */}
        {/* <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-4 text-gray-800 text-base sm:text-lg">India</h4>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <h5 className="font-medium text-sm sm:text-base text-gray-700 mb-3">UPI Payment</h5>
                  <div className="relative w-full h-52 overflow-hidden rounded-md">
                    <Image
                      src="/upi.png"
                      alt="UPI Payment Method"
                      fill
                      className="object-contain shadow-sm"
                    />
                  </div>
                  <p className="mt-3 text-xs text-gray-500">Fast and secure UPI payments for Indian users</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <h5 className="font-medium text-sm sm:text-base text-gray-700 mb-3">IMPS Bank Transfer</h5>
                  <div className="relative w-full h-52 overflow-hidden rounded-md">
                    <Image
                      src="/imps.png"
                      alt="IMPS Payment Method"
                      fill
                      className="object-contain shadow-sm"
                    />
                  </div>
                  <p className="mt-3 text-xs text-gray-500">Immediate Payment Service for bank transfers in India</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-gray-800 text-base sm:text-lg">Other Countries</h4>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <p className="text-gray-700 text-sm sm:text-base mb-4">
                    The DashX Ramp system supports various payment methods across different countries, including:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="inline-block w-6 h-6 bg-gray-200 rounded-full mr-3 flex-shrink-0"></span>
                      <span><span className="font-medium">Turkey:</span> Bank transfers</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-6 h-6 bg-gray-200 rounded-full mr-3 flex-shrink-0"></span>
                      <span><span className="font-medium">Mexico:</span> SPEI transfers</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-6 h-6 bg-gray-200 rounded-full mr-3 flex-shrink-0"></span>
                      <span><span className="font-medium">Vietnam:</span> MoMo and VietQR</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-6 h-6 bg-gray-200 rounded-full mr-3 flex-shrink-0"></span>
                      <span><span className="font-medium">UAE:</span> Bank transfers</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-6 h-6 bg-gray-200 rounded-full mr-3 flex-shrink-0"></span>
                      <span><span className="font-medium">Nigeria:</span> Bank transfers</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 text-center">
                    <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">
                      More payment methods coming soon
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Best Practices</h2>
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Always verify wallet addresses before completing transactions</li>
            <li>Complete KYC processes to avoid transaction limitations</li>
            <li>Ensure sufficient funds in your accounts before initiating transfers</li>
            <li>Keep track of transaction IDs for reference</li>
            <li>Follow payment instructions exactly as provided</li>
            <li>Check transaction status before contacting support</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Support</h2>
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
          <p className="text-gray-700 text-sm sm:text-base">
            For any questions or assistance with the Ramp System, please contact our support team at <strong className="text-blue-600">business@dashx.xyz</strong>.
          </p>
        </div>
      </section>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 sm:p-6 rounded-lg mt-8">
        <p className="text-yellow-700 font-medium text-sm sm:text-base">
          <span className="font-bold">Note:</span> Feature availability may vary by region due to local regulations. The DashX Ramp system will initially launch with support for select countries and payment methods, with more being added over time.
        </p>
      </div>
    </div>
  );
};

export default RampDocs;