// components
import BackgroundVideo from "./custom/BackgroundVideo";

const Section01 = () => {
  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-white">
      <BackgroundVideo />
      <div className="wrapper relative z-10 min-h-[640px] justify-center py-20 sm:min-h-[700px] sm:py-28">
        <div className="max-w-[980px]">
          <h1 className="font-charter text-[2.65rem] leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[4rem]">
            One Universal App.
            <br />
            <span className="lg:whitespace-nowrap">
              Every Stablecoin. Every Chain.
            </span>
            <br />
            <span className="italic text-primary-blue">All Confidential.</span>
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

        <div className="mt-14 grid w-full max-w-[860px] grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            ["Every stablecoin", "One confidential interface across stablecoin ecosystems"],
            ["Every chain", "Built for multichain payment flows"],
            ["Confidential by default", "Amounts and balances stay private"],
          ].map(([title, description]) => (
            <div
              className="group relative overflow-hidden rounded-[18px] border border-white/90 bg-white/60 px-5 py-5 shadow-[0_16px_44px_rgba(30,55,68,0.10)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue/70 hover:bg-white/75 hover:shadow-[0_20px_54px_rgba(40,117,158,0.16)]"
              key={title}
            >
              <span
                aria-hidden="true"
                className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary-blue/20 blur-2xl transition-transform duration-500 group-hover:scale-125"
              />
              <div className="relative">
                <p className="text-sm font-semibold tracking-[-0.01em]">
                  {title}
                </p>
              </div>
              <p className="relative mt-2.5 text-sm leading-5 text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section01;
