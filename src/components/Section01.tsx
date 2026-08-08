// components
import BackgroundVideo from "./custom/BackgroundVideo";
import TypingTextAnimation from "./custom/TypingTextAnimation";

const words = ["Payments", "Trading", "Commerce", "Payroll", "Strategic Deals"];

const Section01 = () => {
  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-white">
      <BackgroundVideo />
      <div className="wrapper relative z-10 min-h-[640px] justify-center py-20 sm:min-h-[700px] sm:py-28">
        <div className="max-w-[780px]">
          <p className="section-label mb-6">Confidential stablecoin infrastructure</p>
          <h1 className="font-charter text-[2.65rem] leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Confidential Stablecoins for{" "}
            <span className="italic text-[#298ec5]">
              <TypingTextAnimation texts={words} />
            </span>
          </h1>
          <p className="section-copy mt-7 max-w-[610px]">
            Move stablecoins without exposing amounts, balances, or business
            relationships. You decide who can see what—and when.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="primary-button"
              href="https://app.stabletrust.io/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Launch Stabletrust
            </a>
            <a
              className="secondary-button"
              href="https://docs.fairblock.network/docs/ConfidentialStablecoins"
              rel="noopener noreferrer"
              target="_blank"
            >
              Read Documentation
            </a>
          </div>
        </div>

        <div className="mt-14 grid w-full max-w-[760px] grid-cols-1 border-y border-line bg-white/72 sm:grid-cols-3">
          {[
            ["Private by default", "Amounts and balances remain confidential"],
            ["Selective disclosure", "Reveal only what a review requires"],
            ["Chain-agnostic", "Built for stablecoins across ecosystems"],
          ].map(([title, description]) => (
            <div
              className="border-b border-line px-0 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"
              key={title}
            >
              <p className="text-sm font-semibold">{title}</p>
              <p className="mt-1 text-sm leading-5 text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section01;
