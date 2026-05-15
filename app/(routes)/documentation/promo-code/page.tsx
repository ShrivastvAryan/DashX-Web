import React from "react";
import Image from "next/image";

const PromoCodeDocs = () => {
  return (
    <div className="space-y-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold">Promo Code Management System Documentation</h1>

      <section>
        <h1 className="text-xl sm:text-2xl font-bold text-theme-blue">
          Streamlined Promotional Code Management
        </h1>
        <p className="mt-2 text-gray-700 text-sm sm:text-base">
          The DashX Promo Code Management System provides a comprehensive solution for creating, managing, and tracking promotional codes. This system enables administrators to efficiently handle customer discounts while maintaining complete control over promotional campaigns.
        </p>
        <div className="mt-6 w-full overflow-hidden rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
          <div className="relative w-full aspect-video p-4">
            <Image
              src="/documentation/promo.png"
              alt="Promo Code Management Dashboard"
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
            <h3 className="text-lg sm:text-xl font-semibold mb-2">1. Promo Code Listing</h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Comprehensive overview of all promotional codes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Table format display of all promo codes</li>
              <li>Key information visibility (code, discount, validity, status)</li>
              <li>Real-time status updates</li>
              <li>Loading state indicators</li>
              <li>Refresh functionality for latest data</li>
            </ul>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">2. Promo Code Creation</h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Intuitive interface for creating new promotional codes:
            </p>
            <div className="mt-4 mb-4 w-full overflow-hidden rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
              <div className="relative w-full h-[300px] p-4">
                <Image
                  src="/documentation/promo-box.png"
                  alt="Add Promo Code Interface"
                  fill
                  className="rounded-lg object-contain"
                  priority
                />
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Custom promo code generation (minimum 3 characters)</li>
              <li>Discount percentage configuration (1-100%)</li>
              <li>Validity period setting</li>
              <li>Single-use option toggle</li>
              <li>Active status control</li>
            </ul>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">3. Promo Code Management</h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Complete control over existing promotional codes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Edit existing promo code details</li>
              <li>Activate/deactivate promo codes</li>
              <li>Delete promotional codes</li>
              <li>Copy promo code to clipboard</li>
              <li>Status monitoring (Active/Inactive/Expired)</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Validation Rules</h2>
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Promo code must be at least 3 characters long</li>
            <li>Discount percentage must be between 1% and 100%</li>
            <li>Valid till date is required</li>
            <li>Default active status is true</li>
            <li>Default single-use status is false</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Usage Flow</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Administrator Flow</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Access the promo code management page</li>
              <li>Create new promo codes with specified parameters</li>
              <li>View and manage existing promo codes</li>
              <li>Edit, deactivate, or delete promo codes as needed</li>
              <li>Monitor promo code usage and effectiveness</li>
            </ol>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Customer Flow</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Enter promo code during checkout</li>
              <li>System validates promo code</li>
              <li>Discount is applied if valid</li>
              <li>Transaction is completed with discount</li>
            </ol>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Support</h2>
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
          <p className="text-gray-700 text-sm sm:text-base">
            For any questions or assistance with the Promo Code Management System, please contact our support team at <strong className="text-blue-600">business@dashx.xyz</strong>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PromoCodeDocs;
