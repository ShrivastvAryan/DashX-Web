import { Button } from "./ui/button";

const BusinessHeroSection = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:business@dashx.xyz";
  };

  return (
    <div className="relative w-full flex flex-col items-center sm:py-48 sm:px-4 pt-36 pb-24 px-4">
      <div className="absolute inset-0 business-background" />
      <div className="absolute inset-0 bg-gradient-to-t from-white to-white/0 bg-opacity-10" />
      <div className="z-10 w-[90%] lg:w-[80%] xl:w-[1200px] flex flex-col items-center gap-2 md:gap-4 pt-4 md:pt-6">
        <h1 className="font-bold text-[#1A1A1A] text-2xl sm:text-4xl md:text-5xl lg:text-[65px] leading-tight md:leading-[1.2] text-center">
          Explore Our Enterprise Features for your Business needs
        </h1>
      </div>
      <div className="z-10 pt-4 md:pt-8 w-[90%] lg:w-[400px] xl:w-[600px] mx-auto text-center">
        <p className="text-sm sm:text-base text-[#666666] font-normal leading-relaxed">
          Unlock powerful enterprise-grade solutions designed to streamline
          operations, enhance security, and scale your business in the crypto
          ecosystem
        </p>
      </div>
      <div className="z-10 pt-[72px] flex items-center sm:gap-6 gap-9 mx-auto">
        <Button
          onClick={handleEmailClick}
          className="gap-3 font-medium text-xs sm:text-base text-white w-24 h-11 sm:w-36 sm:h-14 bg-[#4166FA] shadow-[0px_0px_20px_0px_#4166FA80] rounded-full hover:bg-blue-600"
        >
          <div className="hidden sm:block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#26FF22] rounded-full shadow-[0_0_8px_2px_#26FF22]"></div>
          Contact Us
        </Button>
      </div>
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-white" />
    </div>
  );
};

export default BusinessHeroSection;
