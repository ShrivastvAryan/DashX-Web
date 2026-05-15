import React from "react";
import Image from "next/image";

const PayoutDocs = () => {
  return (
    <div className="space-y-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold">Payout System Documentation</h1>

      <section>
        <h1 className="text-xl sm:text-2xl font-bold text-theme-blue">
          Managing Employee Payments
        </h1>
        <p className="mt-2 text-gray-700 text-sm sm:text-base">
          The DashX Payout System enables merchants to manage employee payments efficiently through cryptocurrency. It provides a seamless way to schedule and process payments while maintaining complete transparency for both merchants and employees.
        </p>
        <div className="mt-6 w-full overflow-hidden rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
          <div className="relative w-full aspect-video p-4">
            <Image
              src="/documentation/payout.jpeg"
              alt="Payout Dashboard Overview"
              width={1200}
              height={675}
              className="rounded-lg object-contain w-full h-full"
              priority
            />
          </div>  
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Key Features</h2>

        <div className="space-y-6">
          <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">1. Employee Management</h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Add and manage employees using their DashX ID (email). The system supports:
            </p>
            <div className="mt-4 mb-4 w-full overflow-hidden rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
              <div className="relative w-full h-[300px] p-4">
                <Image
                  src="/documentation/recent-pay.png"
                  alt="Employee Management Table"
                  fill
                  className="rounded-lg object-contain"
                  priority
                />
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Employee details management (DashX ID)</li>
              <li>Payment schedule configuration</li>
              <li>Salary amount setting</li>
              <li>Chain selection for payments</li>
            </ul>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">2. Payment Scheduling</h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Flexible payment intervals to suit your business needs:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Daily payments</li>
              <li>Weekly payments</li>
              <li>Bi-weekly payments</li>
              <li>Monthly payments</li>
              <li>Custom intervals</li>
            </ul>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">3. Payment Processing</h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Secure and transparent payment processing:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Multiple chain support (SOL, MATIC, ARB, ETH)</li>
              <li>Automatic payment execution</li>
              <li>Transaction history tracking</li>
              <li>Real-time status updates</li>
            </ul>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">4. Dashboard Features</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-gray-800 text-base sm:text-lg">Merchant Dashboard</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
                  <li>Employee management table</li>
                  <li>Payment schedule overview</li>
                  <li>Transaction history</li>
                  <li>Invoice generation and download</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gray-800 text-base sm:text-lg">Employee Dashboard</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
                  <li>Payment schedule view</li>
                  <li>Transaction history</li>
                  <li>Invoice access</li>
                  <li>Payment status tracking</li>
                </ul>
                <div className="mt-4 w-full overflow-hidden rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
                  <div className="relative w-full h-[300px] p-4">
                    <Image
                      src="/documentation/recent-pay.png"
                      alt="Employee Dashboard Table"
                      fill
                      className="rounded-lg object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-4">
              <h4 className="font-semibold text-gray-800 text-base sm:text-lg">Download Invoices</h4>
              <p className="text-gray-700 text-sm sm:text-base">
                Both merchants and employees can download detailed PDF invoices for all transactions:
              </p>
              <div className="w-full overflow-hidden rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
                <div className="relative w-full h-[300px] p-4">
                  <Image
                    src="/documentation/inv.png"
                    alt="Transaction Invoice Example"
                    fill
                    className="rounded-lg object-contain"
                    priority
                  />
                </div>
                <p className="text-center text-sm text-gray-600 mb-2">Available for both Merchant and Employee views</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Getting Started</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Adding an Employee</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Navigate to the Payout section in your dashboard</li>
              <li>Click <strong className="text-blue-600">Add Employee</strong></li>
              <li>Enter the employee&apos;s DashX ID (email)</li>
              <li>Set the payment amount and currency</li>
              <li>Select the payment interval</li>
              <li>Choose the payment chain</li>
              <li>Save the employee details</li>
            </ol>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Managing Payments</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm sm:text-base">
              <li>View all scheduled payments in the dashboard</li>
              <li>Monitor payment status in real-time</li>
              <li>Access transaction history</li>
              <li>Download invoices as needed</li>
            </ol>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Best Practices</h2>
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Always verify employee DashX ID (email) before adding</li>
            <li>Set appropriate payment intervals based on your business needs</li>
            <li>Regularly review and update employee payment details</li>
            <li>Keep track of transaction history for accounting purposes</li>
            <li>Download and store invoices for record-keeping</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Support</h2>
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
          <p className="text-gray-700 text-sm sm:text-base">
            For any questions or assistance with the Payout System, please contact our support team at <strong className="text-blue-600">business@dashx.xyz</strong>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PayoutDocs;
