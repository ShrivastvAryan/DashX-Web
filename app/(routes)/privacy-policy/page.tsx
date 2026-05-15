"use client";
import React from "react";
import Navbar from "@/components/Navbar";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="w-full bg-[#F4F3F1] min-h-screen">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-[#2F2E31] mb-12">Privacy Policy</h1>

          <div className="space-y-8">
            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">Introduction</h2>
              <p className="text-[#2F2E31]/70 leading-relaxed">
                Dashx Payments Inc (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our cryptocurrency payment gateway services, website, and related applications (collectively, &quot;Services&quot;).
              </p>
              <p className="text-[#2F2E31]/70 leading-relaxed mt-4">
                This policy complies with applicable data protection laws, including the European Union General Data Protection Regulation (GDPR) and other relevant privacy regulations.
              </p>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">Data Controller Information</h2>
              <div className="bg-[#F4F3F1] p-6 rounded-2xl space-y-1">
                <p className="text-[#2F2E31] font-semibold">Dashx Payments Inc</p>
                <p className="text-[#2F2E31]/70">Email: business@dashx.xyz</p>
                <p className="text-[#2F2E31]/70">State of Incorporation: Wyoming, United States</p>
                <p className="text-[#2F2E31]/70">For data protection inquiries: business@dashx.xyz</p>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#2F2E31]">Personal Information</h3>
                <p className="text-[#2F2E31]/70">We may collect the following types of personal information:</p>
                <ul className="list-disc list-inside space-y-2 text-[#2F2E31]/70 ml-4">
                  <li>Identity information (name, email address, phone number)</li>
                  <li>Account credentials and authentication information</li>
                  <li>Payment and transaction data</li>
                  <li>Cryptocurrency wallet addresses and transaction history</li>
                  <li>Communication records and support interactions</li>
                  <li>Device information and technical data</li>
                  <li>Location data (IP address, geographic location)</li>
                  <li>Usage data and analytics</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#2F2E31] mt-6">Automatically Collected Information</h3>
                <p className="text-[#2F2E31]/70">When you use our Services, we automatically collect:</p>
                <ul className="list-disc list-inside space-y-2 text-[#2F2E31]/70 ml-4">
                  <li>Log data, including IP addresses, browser type, and operating system</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Device identifiers and hardware information</li>
                  <li>Usage patterns and interaction data</li>
                  <li>Performance and error data</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">Legal Basis for Processing (GDPR)</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70">We process your personal data based on the following legal grounds:</p>
                <ul className="list-disc list-inside space-y-2 text-[#2F2E31]/70 ml-4">
                  <li><span className="font-semibold text-[#2F2E31]">Contract Performance:</span> To provide our cryptocurrency payment services and fulfill our obligations under our Terms of Service</li>
                  <li><span className="font-semibold text-[#2F2E31]">Legitimate Interests:</span> To improve our services, prevent fraud, ensure security, and conduct business operations</li>
                  <li><span className="font-semibold text-[#2F2E31]">Legal Compliance:</span> To comply with applicable laws, including anti-money laundering (AML) and know your customer (KYC) regulations</li>
                  <li><span className="font-semibold text-[#2F2E31]">Vital Interests:</span> To protect the safety and security of our users and prevent illegal activities</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">How We Use Your Information</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70">We use your information for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 text-[#2F2E31]/70 ml-4">
                  <li>Providing and maintaining our cryptocurrency payment services</li>
                  <li>Processing transactions and managing your account</li>
                  <li>Verifying your identity and preventing fraud</li>
                  <li>Complying with legal and regulatory requirements</li>
                  <li>Improving and developing our services</li>
                  <li>Providing customer support and technical assistance</li>
                  <li>Sending service-related communications</li>
                  <li>Analytics and research to enhance user experience</li>
                  <li>Protecting against security threats and illegal activities</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">Information Sharing and Disclosure</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70">We may share your information in the following circumstances:</p>
                <ul className="list-disc list-inside space-y-2 text-[#2F2E31]/70 ml-4">
                  <li><span className="font-semibold text-[#2F2E31]">Service Providers:</span> With third-party vendors who assist us in providing our services (subject to strict confidentiality agreements)</li>
                  <li><span className="font-semibold text-[#2F2E31]">Legal Compliance:</span> When required by law, regulation, or court order</li>
                  <li><span className="font-semibold text-[#2F2E31]">Law Enforcement:</span> To comply with legal processes or respond to government requests</li>
                  <li><span className="font-semibold text-[#2F2E31]">Business Transfers:</span> In connection with mergers, acquisitions, or asset sales (with continued privacy protection)</li>
                  <li><span className="font-semibold text-[#2F2E31]">Fraud Prevention:</span> To prevent fraud, security breaches, or illegal activities</li>
                  <li><span className="font-semibold text-[#2F2E31]">Consent:</span> With your explicit consent for specific purposes</li>
                </ul>
                <p className="text-[#2F2E31] font-semibold mt-4">
                  We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">Data Retention</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70">
                  We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. Specific retention periods include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#2F2E31]/70 ml-4">
                  <li><span className="font-semibold text-[#2F2E31]">Account Information:</span> Until account closure plus 7 years for legal compliance</li>
                  <li><span className="font-semibold text-[#2F2E31]">Transaction Records:</span> Minimum 5 years as required by financial regulations</li>
                  <li><span className="font-semibold text-[#2F2E31]">Communication Records:</span> 3 years for customer support purposes</li>
                  <li><span className="font-semibold text-[#2F2E31]">Technical Data:</span> 2 years for security and service improvement</li>
                </ul>
                <p className="text-[#2F2E31]/70">
                  Data may be retained longer if required by law or for legitimate business purposes such as fraud prevention or legal proceedings.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">Your Rights Under GDPR</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70">
                  If you are a resident of the European Union, you have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#2F2E31]/70 ml-4">
                  <li><span className="font-semibold text-[#2F2E31]">Right of Access:</span> Request copies of your personal data</li>
                  <li><span className="font-semibold text-[#2F2E31]">Right to Rectification:</span> Request correction of inaccurate or incomplete data</li>
                  <li><span className="font-semibold text-[#2F2E31]">Right to Erasure:</span> Request deletion of your personal data (&quot;right to be forgotten&quot;)</li>
                  <li><span className="font-semibold text-[#2F2E31]">Right to Restrict Processing:</span> Request limitation of how we process your data</li>
                  <li><span className="font-semibold text-[#2F2E31]">Right to Data Portability:</span> Request transfer of your data to another service provider</li>
                  <li><span className="font-semibold text-[#2F2E31]">Right to Object:</span> Object to processing based on legitimate interests</li>
                  <li><span className="font-semibold text-[#2F2E31]">Right to Withdraw Consent:</span> Withdraw consent for consent-based processing</li>
                  <li><span className="font-semibold text-[#2F2E31]">Right to Lodge a Complaint:</span> File a complaint with your local data protection authority</li>
                </ul>
                <p className="text-[#2F2E31]/70">
                  To exercise these rights, contact us at business@dashx.xyz. We will respond within 30 days of receiving your request.
                </p>
                <p className="text-[#2F2E31] font-semibold">
                  Please note that some rights may be limited by applicable law or our legitimate business interests, particularly regarding financial regulations and fraud prevention.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">Data Security</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70">
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#2F2E31]/70 ml-4">
                  <li>End-to-end encryption for data transmission</li>
                  <li>Secure data storage with industry-standard encryption</li>
                  <li>Multi-factor authentication and access controls</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Employee training on data protection practices</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>
                <p className="text-[#2F2E31] font-semibold">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">International Data Transfers</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70">
                  Dashx Payments Inc is based in Wyoming, United States. Your personal data may be transferred to, stored, and processed in the United States and other countries where our service providers operate.
                </p>
                <p className="text-[#2F2E31]/70">
                  For transfers from the European Economic Area (EEA) to countries without an adequacy decision, we implement appropriate safeguards including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#2F2E31]/70 ml-4">
                  <li>Additional security measures to ensure data protection</li>
                  <li>Appropriate contractual protections where required</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">Cookies and Tracking Technologies</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70">
                  We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and provide personalized services. Types of cookies we use include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#2F2E31]/70 ml-4">
                  <li><span className="font-semibold text-[#2F2E31]">Essential Cookies:</span> Required for basic website functionality</li>
                  <li><span className="font-semibold text-[#2F2E31]">Performance Cookies:</span> Help us analyze website usage and performance</li>
                  <li><span className="font-semibold text-[#2F2E31]">Functionality Cookies:</span> Remember your preferences and settings</li>
                </ul>
                <p className="text-[#2F2E31]/70">
                  You can control cookie settings through your browser preferences. However, disabling certain cookies may affect website functionality.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">Third-Party Services</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70">
                  Our Services may contain links to third-party websites, applications, or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
                </p>
                <p className="text-[#2F2E31]/70">
                  We may also integrate with third-party services for analytics, payment processing, and other functionalities. These integrations are subject to their respective privacy policies and our data processing agreements.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">Limitation of Liability</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31] font-semibold">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, DASHX PAYMENTS INC SHALL NOT BE LIABLE FOR ANY DAMAGES ARISING FROM DATA BREACHES, UNAUTHORIZED ACCESS, OR OTHER SECURITY INCIDENTS BEYOND OUR REASONABLE CONTROL.
                </p>
                <p className="text-[#2F2E31]/70">
                  Our liability for privacy-related claims is limited to a maximum of $100.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">Children&apos;s Privacy</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70">
                  Our Services are not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal data from a child under 18, we will take steps to delete such information promptly.
                </p>
                <p className="text-[#2F2E31]/70">
                  If you are a parent or guardian and believe your child has provided us with personal information, please contact us at business@dashx.xyz.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">Changes to This Privacy Policy</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of material changes by:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#2F2E31]/70 ml-4">
                  <li>Posting the updated policy on our website</li>
                  <li>Sending email notifications to registered users</li>
                  <li>Displaying prominent notices within our Services</li>
                </ul>
                <p className="text-[#2F2E31]/70">
                  Your continued use of our Services after the effective date of the updated policy constitutes acceptance of the changes.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">Contact Information</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-[#F4F3F1] p-6 rounded-2xl space-y-1">
                  <p className="text-[#2F2E31] font-semibold">Dashx Payments Inc</p>
                  <p className="text-[#2F2E31]/70">Email: business@dashx.xyz</p>
                  <p className="text-[#2F2E31]/70">State of Incorporation: Wyoming, United States</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">Effective Date</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70">
                  This Privacy Policy is effective as of January 1, 2025, and will remain in effect until modified by Dashx Payments Inc.
                </p>
                <p className="text-[#2F2E31]/70">
                  Last updated: January 1, 2025
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
