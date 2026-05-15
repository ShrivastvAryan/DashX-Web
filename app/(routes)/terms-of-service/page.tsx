"use client";
import React from "react";
import Navbar from "@/components/Navbar";

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <div className="w-full bg-[#F4F3F1] min-h-screen">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-[#2F2E31] mb-4">Terms of Service</h1>
          <p className="text-[#2F2E31] font-medium mb-2">DashX Payments Inc.</p>
          <p className="text-[#2F2E31]/60 mb-12">Last Updated: 19 February 2026</p>

          <div className="space-y-8">
            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">1. Introduction</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the DashX platform and related services (collectively, the &ldquo;Platform&rdquo;) operated by DashX Payments Inc., a Wyoming corporation (&ldquo;DashX&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
                </p>
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  By accessing or using the Platform, you agree to be bound by these Terms, our Privacy Policy, Compliance Disclosures, Prohibited Use Policy, and E-Sign &amp; Electronic Communications Notice (collectively, the &ldquo;Agreement&rdquo;).
                </p>
                <p className="text-[#2F2E31]/70 leading-relaxed">If you do not agree, you must not use the Platform.</p>
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  You consent to receive communications electronically in accordance with our E-Sign &amp; Electronic Communications Notice.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">2. Nature of Services</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  DashX provides financial technology infrastructure that enables businesses and independent contractors to coordinate:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#2F2E31]/70 ml-4">
                  <li>Cross-border payment workflows</li>
                  <li>Export-related payment routing</li>
                  <li>Documentation and reconciliation workflows</li>
                  <li>Settlement orchestration</li>
                  <li>Compliance coordination with regulated partners</li>
                </ul>
                <p className="text-[#2F2E31]/70 leading-relaxed">DashX operates strictly as a technology and orchestration layer.</p>
                <p className="text-[#2F2E31]/70 leading-relaxed">DashX does not:</p>
                <ul className="list-disc list-inside space-y-2 text-[#2F2E31]/70 ml-4">
                  <li>Operate as a bank</li>
                  <li>Accept deposits</li>
                  <li>Custody or hold customer funds</li>
                  <li>Issue credit</li>
                  <li>Operate as an Authorized Dealer (AD-1) bank</li>
                  <li>Independently conduct foreign exchange transactions</li>
                  <li>Independently perform regulated KYC or AML reporting functions</li>
                  <li>Act as a reporting entity under Indian PMLA in the ordinary course of its business operations</li>
                </ul>
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  All regulated financial services accessible through the Platform are performed by licensed third-party institutions (&ldquo;Regulated Partners&rdquo;) in accordance with applicable law.
                </p>
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  DashX does not provide legal, tax, accounting, or investment advice.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">3. Role of Regulated Partners</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  Certain regulated services made accessible through the Platform are provided by third-party licensed entities (&ldquo;Regulated Partners&rdquo;).
                </p>
                <p className="text-[#2F2E31]/70 leading-relaxed">These services may include:</p>
                <ul className="list-disc list-inside space-y-2 text-[#2F2E31]/70 ml-4">
                  <li>Identity verification (KYC / KYB)</li>
                  <li>AML monitoring and transaction screening</li>
                  <li>Sanctions compliance</li>
                  <li>Regulatory reporting</li>
                  <li>Domestic settlement execution</li>
                  <li>Foreign exchange conversion and routing</li>
                  <li>Cross-border banking coordination</li>
                </ul>
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  Regulated Partners are solely responsible for performing regulated financial functions in accordance with applicable laws and regulatory requirements.
                </p>
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  You may be required to agree to additional terms imposed by such partners.
                </p>
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  Access to regulated services is subject to approval, review, and ongoing monitoring by those partners.
                </p>
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  DashX does not control partner compliance determinations and is not responsible for partner decisions, delays, freezes, or restrictions.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">4. Domestic Payment Flows (India)</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  Where domestic settlement occurs within India, such settlement is executed through licensed, compliant, and FIU-registered partner entities.
                </p>
                <p className="text-[#2F2E31]/70 leading-relaxed">These partners are responsible for:</p>
                <ul className="list-disc list-inside space-y-2 text-[#2F2E31]/70 ml-4">
                  <li>KYC / KYB onboarding</li>
                  <li>AML monitoring</li>
                  <li>Suspicious transaction reporting</li>
                  <li>Regulatory reporting obligations</li>
                  <li>Domestic compliance requirements</li>
                </ul>
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  DashX does not independently perform regulated domestic financial services in India.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">5. International Export Flows</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70 leading-relaxed">For export-related cross-border transactions:</p>
                <ul className="list-disc list-inside space-y-2 text-[#2F2E31]/70 ml-4">
                  <li>Transactions are routed through regulated international partners;</li>
                  <li>Such partners coordinate directly with Authorized Dealer (AD-1) banks in India where required;</li>
                  <li>Necessary export documentation and reporting are handled through regulated banking channels;</li>
                  <li>Foreign Inward Remittance Certificates (FIRCs), where applicable, are issued through authorized banking partners and not by DashX.</li>
                </ul>
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  DashX does not operate as an AD-1 bank and does not independently issue FIRCs.
                </p>
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  DashX provides infrastructure, workflow coordination, and orchestration only.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">6. User Representations and Obligations</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70 leading-relaxed">By using the Platform, you represent and warrant that:</p>
                <ul className="list-disc list-inside space-y-2 text-[#2F2E31]/70 ml-4">
                  <li>You are engaged in lawful business activity;</li>
                  <li>Any export transactions relate to legitimate goods or services;</li>
                  <li>Funds processed through the Platform derive from lawful sources;</li>
                  <li>You comply with applicable foreign exchange, FEMA, RBI, sanctions, and export control regulations;</li>
                  <li>You maintain accurate tax, accounting, and regulatory records;</li>
                  <li>You will provide accurate information to DashX and its Regulated Partners.</li>
                </ul>
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  You are solely responsible for your own legal and regulatory compliance.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">7. Prohibited Use</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  Your use of the Platform is subject to DashX&apos;s Prohibited Use Policy, which is incorporated into these Terms by reference.
                </p>
                <p className="text-[#2F2E31]/70 leading-relaxed">You may not use DashX:</p>
                <ul className="list-disc list-inside space-y-2 text-[#2F2E31]/70 ml-4">
                  <li>In violation of applicable laws or regulations;</li>
                  <li>To evade sanctions or capital controls;</li>
                  <li>For illicit trade or unlawful activity;</li>
                  <li>For money laundering or trade-based laundering;</li>
                  <li>In connection with sanctioned jurisdictions;</li>
                  <li>To circumvent regulatory reporting systems.</li>
                </ul>
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  DashX and its Regulated Partners reserve the right to suspend, restrict, or terminate access where required by law, regulatory obligation, risk management controls, or compliance determinations.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">8. No Custody; No Banking Services</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70 leading-relaxed">DashX does not hold, custody, or control customer funds.</p>
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  All settlement, conversion, and banking functions occur through Regulated Partners and financial institutions.
                </p>
                <p className="text-[#2F2E31]/70 leading-relaxed">DashX is not responsible for:</p>
                <ul className="list-disc list-inside space-y-2 text-[#2F2E31]/70 ml-4">
                  <li>Bank or partner compliance reviews;</li>
                  <li>Regulatory freezes or investigations;</li>
                  <li>Government actions;</li>
                  <li>Partner-imposed restrictions or service denials;</li>
                  <li>Delays arising from regulatory or banking review processes.</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">9. Fees</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  Fees for use of the Platform will be disclosed within the Platform, via agreement, or through commercial documentation.
                </p>
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  Users are responsible for all applicable taxes arising from their activities.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">10. Intellectual Property</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  All Platform content, software, workflows, and documentation are owned by DashX or its licensors and are protected by applicable intellectual property laws.
                </p>
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  You are granted a limited, non-exclusive, non-transferable license to use the Platform solely in accordance with these Terms.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">11. Disclaimer of Warranties</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70 leading-relaxed">The Platform is provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo;</p>
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  To the maximum extent permitted by law, DashX disclaims all warranties, express or implied, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#2F2E31]/70 ml-4">
                  <li>Merchantability</li>
                  <li>Fitness for a particular purpose</li>
                  <li>Non-infringement</li>
                </ul>
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  DashX does not guarantee uninterrupted, error-free, or regulatory outcome-specific operation of the Platform.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">12. Limitation of Liability</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70 leading-relaxed">To the maximum extent permitted by law:</p>
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  DashX&apos;s total liability arising out of or relating to these Terms shall not exceed the greater of:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#2F2E31]/70 ml-4">
                  <li>The fees paid by you to DashX in the preceding 12 months; or</li>
                  <li>USD $100.</li>
                </ul>
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  DashX shall not be liable for indirect, incidental, special, consequential, punitive, or exemplary damages.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">13. Indemnification</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  You agree to indemnify and hold harmless DashX, its officers, directors, employees, and affiliates from any claims, damages, losses, or liabilities arising from:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#2F2E31]/70 ml-4">
                  <li>Your use of the Platform;</li>
                  <li>Your violation of applicable laws;</li>
                  <li>Your breach of these Terms;</li>
                  <li>Regulatory investigations arising from your activities.</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">14. Termination</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70 leading-relaxed">DashX may suspend or terminate access:</p>
                <ul className="list-disc list-inside space-y-2 text-[#2F2E31]/70 ml-4">
                  <li>For violation of these Terms;</li>
                  <li>Upon partner compliance determination;</li>
                  <li>If required by law or regulatory directive;</li>
                  <li>If continued service presents compliance or reputational risk.</li>
                </ul>
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  Certain provisions shall survive termination, including liability limitations and indemnification.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">15. Governing Law and Dispute Resolution</h2>
              <div className="space-y-3">
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  These Terms are governed by the laws of the State of Wyoming, United States, without regard to conflict of law principles.
                </p>
                <p className="text-[#2F2E31]/70 leading-relaxed">
                  Disputes shall be resolved through binding arbitration in Wyoming, unless otherwise required by applicable law.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-[32px] border border-[#EBEBEB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-theme-blue mb-4">16. Contact Information</h2>
              <div className="bg-[#F4F3F1] p-6 rounded-2xl space-y-1">
                <p className="text-[#2F2E31] font-semibold">DashX Payments Inc.</p>
                <p className="text-[#2F2E31]/70">30 N Gould St Ste R</p>
                <p className="text-[#2F2E31]/70">Sheridan, Wyoming 82801</p>
                <p className="text-[#2F2E31]/70">United States</p>
                <p className="text-[#2F2E31]/70">business@dashx.xyz</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
