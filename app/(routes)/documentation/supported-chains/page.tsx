import React from "react";
import Image from "next/image";
import { lifiSupportedChain } from "@/utils/types/shared.types";

const merchantSupportedChains = [
  {
    name: "Ethereum",
    logo: "/assets/tokens/eth.svg",
    blockChain: "ETH",
  },
  {
    name: "Arbitrum",
    logo: "/assets/tokens/arb.svg",
    blockChain: "ARB",
  },
  {
    name: "Polygon",
    logo: "/assets/tokens/poly.svg",
    blockChain: "POL",
  },
  {
    name: "Solana",
    logo: "/assets/tokens/sol.svg",
    blockChain: "SOL",
  },
  {
    name: "Starknet",
    logo: "/assets/tokens/strk.svg",
    blockChain: "STRK",
  },
  {
    name: "Base",
    logo: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/base.svg",
    blockChain: "BASE",

  
  }
];

const SupportedChainsDocs = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Supported Blockchain Networks</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <p className="text-gray-600 mb-4">
            DashX supports multiple blockchain networks to provide flexibility and
            choice for our merchants. Each network has its own unique features and
            benefits.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-blue-800 font-medium">
              Note: We support all networks that are supported by LI.FI, ensuring comprehensive blockchain compatibility for your transactions.
            </p>
          </div>
        </div>
      </section>


      <section>
        <h2 className="text-2xl font-semibold mb-4">Available Networks</h2>
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 table-fixed">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="w-2/5 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Network
                  </th>
                  <th scope="col" className="w-1/5 px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Chain ID
                  </th>
                  <th scope="col" className="w-2/5 px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Symbol
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {lifiSupportedChain.map((chain, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <Image
                            src={chain.logo}
                            alt={`${chain.name} logo`}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{chain.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-gray-900">{chain.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-gray-900">{chain.blockChain}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Merchant Supported Wallets</h2>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <p className="text-gray-600 mb-4">
            The following networks are specifically supported for merchant wallets:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {merchantSupportedChains.map((chain, index) => (
              <div
                key={index}
                className="bg-white flex gap-5 justify-center items-center rounded-2xl shadow-md p-6 border border-gray-200"
              >
                <Image
                  src={chain.logo}
                  alt={`${chain.name} logo`}
                  width={80}
                  height={32}
                  className="w-16 h-16 pl-2 sm:pl-4 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {chain.name}
                  </h3>
                  <h5 className="text-gray-600">{chain.blockChain}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        {/* <h2 className="text-2xl font-semibold mb-4">Network Selection</h2>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <p className="text-gray-600 mb-4">
            When creating payment links or processing transactions, you can
            specify which networks to accept. This allows you to:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Optimize for specific user bases</li>
            <li>Minimize transaction costs</li>
            <li>Ensure compatibility with preferred wallets</li>
            <li>Balance security and convenience</li>
          </ul>
        </div> */}
      </section>
    </div>
  );
};

export default SupportedChainsDocs;
