// components
import BackgroundVideo from "./custom/BackgroundVideo";

const stablecoins = [
  { name: "USDC", logo: "/usp-logos/usdc.svg" },
  { name: "USDT", logo: "/usp-logos/usdt.svg" },
  { name: "PYUSD", logo: "/usp-logos/pyusd.svg" },
  { name: "M0", logo: "/usp-logos/m0.svg" },
  { name: "OUSD", logo: "/usp-logos/ousd.svg" },
];

const chains = [
  { name: "Arbitrum", logo: "/usp-logos/arbitrum.svg" },
  { name: "Ethereum", logo: "/usp-logos/ethereum.png" },
  { name: "Stellar", logo: "/usp-logos/stellar.png" },
  { name: "Hyperliquid", logo: "/usp-logos/hyperliquid.png" },
  { name: "BNB Chain", logo: "/usp-logos/bnb-chain.ico" },
  { name: "Tempo", logo: "/usp-logos/tempo.svg" },
  { name: "Arc", logo: "/usp-logos/arc.svg" },
];

type BrandMark = (typeof stablecoins)[number];

const BrandCloud = ({ brands }: { brands: readonly BrandMark[] }) => (
  <div className="relative mt-5 flex min-h-[92px] flex-wrap content-center items-center justify-center gap-2.5">
    {brands.map((brand) => (
      <div
        className="flex h-11 items-center gap-2 rounded-full border border-white/90 bg-white/75 px-3 shadow-[0_7px_18px_rgba(32,61,75,0.08)] backdrop-blur-lg transition-transform duration-300 group-hover:-translate-y-0.5"
        key={brand.name}
        title={brand.name}
      >
        <img
          alt={`${brand.name} logo`}
          className="h-6 w-6 shrink-0 object-contain"
          loading="lazy"
          src={brand.logo}
        />
        <span className="text-[11px] font-semibold tracking-[-0.01em] text-ink/75">
          {brand.name}
        </span>
      </div>
    ))}
  </div>
);

const ConfidentialVisual = () => (
  <div className="relative mt-5 min-h-[92px] rounded-2xl border border-white/90 bg-white/65 p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_9px_24px_rgba(32,61,75,0.08)] backdrop-blur-xl">
    <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.12em] text-muted/70">
      <span>Protected balance</span>
      <span className="flex items-center gap-1 text-primary-blue">
        <svg aria-hidden="true" className="h-3 w-3" fill="none" viewBox="0 0 16 16">
          <rect height="7.5" rx="2" stroke="currentColor" strokeWidth="1.4" width="10" x="3" y="7" />
          <path d="M5.3 7V5.2A2.7 2.7 0 0 1 8 2.5a2.7 2.7 0 0 1 2.7 2.7V7" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
        </svg>
        Encrypted
      </span>
    </div>
    <div className="mt-2.5 flex items-end justify-between">
      <span className="font-charter text-[1.65rem] leading-none tracking-[0.08em] text-ink/80">
        ••••••
      </span>
      <span className="rounded-full bg-primary-blue/10 px-2 py-1 text-[10px] font-semibold text-primary-blue">
        Private
      </span>
    </div>
    <div className="mt-3 flex items-center gap-2 border-t border-line/80 pt-3">
      <span className="h-6 w-6 rounded-full bg-ink/80" />
      <span className="h-px flex-1 bg-gradient-to-r from-ink/25 via-primary-blue/70 to-ink/25" />
      <span className="flex h-7 min-w-[54px] items-center justify-center rounded-full border border-primary-blue/20 bg-primary-blue/10 text-xs font-semibold tracking-[0.12em] text-primary-blue">
        ••••
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-ink/25 via-primary-blue/70 to-ink/25" />
      <span className="h-6 w-6 rounded-full border-2 border-ink/60 bg-white" />
    </div>
  </div>
);

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
            Stabletrust Pay is Fairblock's flagship application for
            confidential stablecoin transfers across chains. Use any
            stablecoin on any chain while keeping amounts, balances, and
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

        <div className="mt-14 grid w-full max-w-[980px] grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="group relative overflow-hidden rounded-[22px] border border-white/90 bg-white/60 px-5 py-5 shadow-[0_16px_44px_rgba(30,55,68,0.10)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue/70 hover:bg-white/75 hover:shadow-[0_20px_54px_rgba(40,117,158,0.16)]">
            <span aria-hidden="true" className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary-blue/20 blur-2xl transition-transform duration-500 group-hover:scale-125" />
            <p className="relative font-charter text-xl leading-tight tracking-[-0.025em] text-ink">
              Every stablecoin
            </p>
            <BrandCloud brands={stablecoins} />
          </div>

          <div className="group relative overflow-hidden rounded-[22px] border border-white/90 bg-white/60 px-5 py-5 shadow-[0_16px_44px_rgba(30,55,68,0.10)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue/70 hover:bg-white/75 hover:shadow-[0_20px_54px_rgba(40,117,158,0.16)]">
            <span aria-hidden="true" className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary-blue/20 blur-2xl transition-transform duration-500 group-hover:scale-125" />
            <p className="relative font-charter text-xl leading-tight tracking-[-0.025em] text-ink">
              Every chain
            </p>
            <BrandCloud brands={chains} />
          </div>

          <div className="group relative overflow-hidden rounded-[22px] border border-white/90 bg-white/60 px-5 py-5 shadow-[0_16px_44px_rgba(30,55,68,0.10)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue/70 hover:bg-white/75 hover:shadow-[0_20px_54px_rgba(40,117,158,0.16)]">
            <span aria-hidden="true" className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary-blue/20 blur-2xl transition-transform duration-500 group-hover:scale-125" />
            <p className="relative font-charter text-xl leading-tight tracking-[-0.025em] text-ink">
              Confidential by default
            </p>
            <ConfidentialVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section01;
