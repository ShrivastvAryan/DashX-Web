import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqData = [
  {
    q: "Do I need a business to use DashX?",
    a: "No. You can create an Individual Account to receive payroll, bounties, and client payments — no business registration needed.",
  },
  {
    q: "How fast do INR payouts reach my bank?",
    a: "Off-ramps are generally processed in T+0 (same day), with rare cases taking T+1.",
  },
  {
    q: "Is DashX FIU compliant and legal in India?",
    a: "Yes, we work with compliant FIU partners to ensure all transactions are legal and regulated in India.",
  },
  {
    q: "Can I track payments live?",
    a: "Yes, payments update in real time inside your dashboard.",
  },
  {
    q: "What fees does DashX charge?",
    a: "DashX charges a 0.5% fee on transactions.",
  },
  {
    q: "Can I invoice clients through DashX?",
    a: "Yes, invoicing is supported and you can send payment links outside the platform to your clients.",
  },
  {
    q: "Can companies use DashX for payroll?",
    a: "Yes, many companies use DashX for automatic payrolls and manual payouts.",
  },
  {
    q: "What currencies do you support?",
    a: "We support INR and USDC as currencies.",
  },
];

export default function FAQSection() {
  return (
    <div className="w-full max-w-2xl mx-auto md:py-3">
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((item, idx) => (
          <AccordionItem 
            key={idx}
            value={`item-${idx}`}
            className="
              rounded-3xl border bg-card-bg border-gray-200
              px-4 mb-3 shadow-sm hover:shadow
              transition-all
            "
          >
            <AccordionTrigger className="text-left text-14 md:text-16 2xl:text-18 font-redaction py-5 font-medium">
              {item.q}
            </AccordionTrigger>

            <AccordionContent className="pt-0 pb-4 tracking-tight font-sans text-12 md:text-14 text-secondary">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
