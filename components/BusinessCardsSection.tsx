import { Icons } from "./Icons";

const BusinessCardSection = () => {
  const handleCalendlyClick = () => {
    window.open("https://calendly.com/dhruvgera61", "_blank");
  };

  return (
    <div className="flex flex-col items-center px-4 sm:px-4 py-6 sm:py-12 lg:px-4 lg:py-24 gap-3 w-[90%] lg:w-[80%] xl:w-[1200px] mx-auto">
      <div className="w-full p-3 sm:px-14 sm:py-8 bg-[#FAFAFA] rounded-2xl text-xs sm:text-2xl lg:text-4xl tracking-tight leading-[14.52px] sm:leading-[43.56px] font-semibold">
        Transform Your Business Operations with Powerful Features Designed for
        Simplicity and Efficiency
      </div>
      <div className="w-full flex flex-row gap-3">
        <div className="flex-1 order-1 sm:order-2 px-6 sm:px-[102px] py-8 sm:py-14 bg-[#FAFAFA] rounded-2xl flex flex-col items-start justify-center gap-1 sm:gap-2">
          <p className="text-base sm:text-4xl font-semibold leading-[19.36px] sm:leading-[45.98px] tracking-[-0.02em] sm:tracking-tight text-[#4166FA]">
            Mass Payouts for Employees!
          </p>
          <p className="text-[8px] sm:text-lg font-medium leading-[9.68px] sm:leading-[21.78px] tracking-[-0.02em] sm:tracking-tight text-[#666666]">
            Simplify payroll with our mass payout feature. Whether your team is
            small or large, automate bulk payments, ensure timely payouts, and
            focus on growing your business.
          </p>
        </div>
        <div className="order-2 sm:order-1 bg-[#FAFAFA] p-4 sm:p-16 border-[1px] border-[#F0F0F0] rounded-2xl flex items-center justify-center">
          <Icons.group className="w-[94.44px] h-[90px] sm:w-48 sm:h-48" />
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="w-full flex gap-3">
          <div className="order-1 sm:order-2 bg-[#FAFAFA] p-4 sm:p-16 border-[1px] border-[#F0F0F0] rounded-2xl flex items-center justify-center">
            <Icons.shield className="w-[94.44px] h-[90px] sm:w-48 sm:h-48" />
          </div>
          <div className="order-2 sm:order-1 flex-1 px-6 sm:px-14 py-8 sm:py-14 bg-[#FAFAFA] rounded-2xl flex flex-col items-start justify-center gap-2">
            <p className="text-base sm:text-4xl font-semibold leading-[19.36px] sm:leading-[45.98px] tracking-[-0.02em] sm:tracking-tight text-[#4166FA]">
              <span className="block sm:hidden">
                Secure Business Transactions
              </span>
              <span className="hidden sm:block">
                Secure and Enhance Your Business Transactions
              </span>
            </p>
            <p className="hidden sm:block text-lg font-medium leading-[21.78px] tracking-[-0.02em] text-[#666666]">
              Our payment gateway offers a secure, efficient solution for
              processing online transactions, supporting multiple payment
              methods and currencies. Easy to integrate, it ensures a seamless,
              branded checkout experience for your customers.
            </p>
          </div>
        </div>
        <div className="block sm:hidden w-full bg-[#FAFAFA] p-4 rounded-2xl border-[1px] border-[#F0F0F0]">
          <p className="text-[8px] font-medium leading-[9.68px] tracking-tight text-[#666666]">
            Our payment gateway offers a secure, efficient solution for
            processing online transactions, supporting multiple payment methods
            and currencies. Easy to integrate, it ensures a seamless, branded
            checkout experience for your customers.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute ml-10 left-1/4 top-4">
          <Icons.dumble className="w-36 h-5 hidden sm:block" />
        </div>
        <div className="w-full flex gap-3">
          <div className="hidden sm:flex flex-1 px-14 py-14 bg-[#FAFAFA] rounded-2xl flex-col items-start justify-center gap-2">
            <p className="text-4xl leading-[45.98px] font-semibold text-[#4166FA] tracking-tight">
              Receive Funds in Any Currency
            </p>
          </div>

          <div className="hidden sm:flex flex-1 px-14 py-14 bg-[#FAFAFA] rounded-2xl flex-col items-start justify-center gap-2">
            <p className="text-lg font-medium leading-[21.78px] tracking-tight text-[#666666]">
              Expand your global reach effortlessly with our platform. Receive
              payments in any currency, eliminating concerns about conversions
              and exchange rates for smooth, hassle-free transactions.
            </p>
          </div>

          <div className="hidden sm:flex bg-[#FAFAFA] py-8 px-16 border-[1px] border-[#F0F0F0] rounded-2xl items-center justify-center relative overflow-hidden">
            <Icons.stack className="w-52 h-50 z-10" />
          </div>

          <div className="sm:hidden flex flex-col gap-2 px-6 py-4 bg-[#FAFAFA] rounded-2xl">
            <p className="text-base font-semibold leading-[19.36px] tracking-[-0.02em] text-[#4166FA]">
              Receive Funds in Any Currency
            </p>
            <p className="text-[8px] font-medium leading-[9.68px] tracking-[-0.02em] text-[#666666]">
              Expand your global reach effortlessly with our platform. Receive
              payments in any currency, eliminating concerns about conversions
              and exchange rates for smooth, hassle-free transactions.
            </p>
          </div>
          <div className="sm:hidden relative flex items-center justify-center bg-[#FAFAFA] p-4 border-[1px] border-[#F0F0F0] rounded-xl overflow-hidden">
            <div className="absolute rounded-full w-[200px] h-[120px] -bottom-0 bg-[#DDCAFF] blur-[90px]" />
            <Icons.stack className="w-52 h-[80px]  z-10" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="w-full flex gap-3">
          <div className="order-1  bg-[#FAFAFA] p-4 sm:p-16 border-[1px] border-[#F0F0F0] rounded-2xl flex items-center justify-center">
            <Icons.pump className="w-[94.44px] h-[90px] sm:w-48 sm:h-48" />
          </div>
          <div className="order-2 sm:order-1 flex-1 px-6 sm:px-[102px] py-8 sm:py-14 bg-[#FAFAFA] rounded-2xl flex flex-col items-start justify-center gap-2">
            <p className="text-base sm:text-4xl font-semibold leading-[19.36px] sm:leading-[45.98px] tracking-[-0.02em] sm:tracking-tight text-[#4166FA]">
              <span className="block sm:hidden">Low Transaction fees</span>
              <span className="hidden sm:block">
                Cost-Effective Transactions with Low Fees
              </span>
            </p>
            <p className="hidden sm:block text-lg font-medium leading-[21.78px] tracking-[-0.02em] text-[#666666]">
              Our platform cuts costs with low gas fees and reduced transaction
              cuts. Optimized for efficiency, it keeps more of your funds while
              ensuring cost-effective, reliable transactions for payments and
              asset transfers.
            </p>
          </div>
        </div>
        <div className="block sm:hidden w-full bg-[#FAFAFA] p-4 rounded-2xl border-[1px] border-[#F0F0F0]">
          <p className="text-[8px] font-medium leading-[9.68px] tracking-tight text-[#666666]">
            Our platform cuts costs with low gas fees and reduced transaction
            cuts. Optimized for efficiency, it keeps more of your funds while
            ensuring cost-effective, reliable transactions for payments and
            asset transfers.
          </p>
        </div>
      </div>
      <div
        onClick={handleCalendlyClick}
        className="w-full p-5 sm:p-12 business-contact-background flex items-center justify-between rounded-2xl cursor-pointer hover:opacity-90 transition-opacity"
      >
        <div className="z-10 max-w-36 sm:max-w-sm ">
          <h1 className="font-bold text-lg sm:text-4xl leading-[21.78px] sm:leading-[43.56px] text-white relative">
            <span className="absolute inset-0 [text-shadow:_-1px_-1px_0_#F1D2FF,_1px_-1px_0_#F1D2FF,_-1px_1px_0_#F1D2FF,_1px_1px_0_#F1D2FF] text-white">
              Book a meeting with us on Calendly
            </span>
            <span className="relative">Book a meeting with us on Calendly</span>
          </h1>
        </div>
        <Icons.contactArrow className="w-[104px] h-[104px] sm:w-32 sm:h-32 z-10" />
      </div>
    </div>
  );
};

export default BusinessCardSection;
