// components
import BackgroundVideo from "./custom/BackgroundVideo";

const Section01 = () => {
  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-white">
      <BackgroundVideo />
      <div className="wrapper relative z-10 min-h-[640px] justify-center py-20 sm:min-h-[700px] sm:py-28">
        <div className="max-w-[980px]">
          <p className="section-label mb-6">
            Stabletrust Pay
          </p>
          <h1 className="font-charter text-[2.65rem] leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[4rem]">
            One Universal App.
            <br />
            <span className="lg:whitespace-nowrap">
              Every Stablecoin. Every Chain.
            </span>
            <br />
            <span className="italic text-[#298ec5]">All Confidential.</span>
          </h1>
          <p className="section-copy mt-7 max-w-[660px]">
            Stabletrust Pay is Fairblock's flagship app for confidential
            stablecoin transfers across chains. Use one application for every
            stablecoin, on every chain, while keeping amounts, balances, and
            business relationships private.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="primary-button"
              href="https://app.stabletrust.io/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Launch Stabletrust Pay
            </a>
            <a
              className="secondary-button"
              href="https://docs.fairblock.network/ct/guides/apps/stabletrust-app"
              rel="noopener noreferrer"
              target="_blank"
            >
              Read Documentation
            </a>
          </div>
        </div>

        <div className="mt-14 grid w-full max-w-[760px] grid-cols-1 border-y border-line bg-white/72 sm:grid-cols-3">
          {[
            ["Every stablecoin", "One confidential interface across stablecoin ecosystems"],
            ["Every chain", "Built for multichain payment flows"],
            ["Confidential by default", "Amounts and balances stay private"],
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
