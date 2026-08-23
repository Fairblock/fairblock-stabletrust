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
  <div className="relative mt-4 flex items-center justify-center gap-1">
    {brands.map((brand) => (
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/90 bg-white/80 shadow-[0_6px_16px_rgba(32,61,75,0.09)] backdrop-blur-lg transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-9 sm:w-9"
        key={brand.name}
        title={brand.name}
      >
        <img
          alt={`${brand.name} logo`}
          className="h-6 w-6 shrink-0 object-contain"
          loading="lazy"
          src={brand.logo}
        />
      </div>
    ))}
  </div>
);

const ConfidentialVisual = () => (
  <svg
    aria-label="Encrypted network relationships and transfers"
    className="relative mt-2.5 h-[54px] w-full overflow-visible"
    fill="none"
    viewBox="0 0 260 70"
  >
    <defs>
      <linearGradient id="secure-link" x1="42" x2="218" y1="35" y2="35" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0B0D10" stopOpacity=".2" />
        <stop offset=".5" stopColor="#58BDF6" stopOpacity=".9" />
        <stop offset="1" stopColor="#0B0D10" stopOpacity=".2" />
      </linearGradient>
      <filter id="secure-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" />
      </filter>
    </defs>

    <circle cx="130" cy="35" fill="#58BDF6" fillOpacity=".22" filter="url(#secure-glow)" r="24" />
    <path d="M51 18 112 31M51 52l61-13M209 18l-61 13M209 52l-61-13" stroke="url(#secure-link)" strokeDasharray="3 4" strokeLinecap="round" strokeWidth="1.5" />

    <g fill="#fff" stroke="#0B0D10" strokeOpacity=".48" strokeWidth="1.5">
      <circle cx="39" cy="15" r="9" />
      <circle cx="39" cy="55" r="9" />
      <circle cx="221" cy="15" r="9" />
      <circle cx="221" cy="55" r="9" />
    </g>

    <g fill="#58BDF6" stroke="#fff" strokeWidth="2">
      <circle cx="130" cy="35" r="17" />
    </g>
    <path d="M123.5 33v-3.1a6.5 6.5 0 0 1 13 0V33m-15 0h17v12h-17z" stroke="#0B0D10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    <circle cx="130" cy="38.5" fill="#0B0D10" r="1.7" />

    <g fill="#fff" stroke="#58BDF6" strokeOpacity=".55">
      <rect height="13" rx="6.5" width="34" x="69" y="13" />
      <rect height="13" rx="6.5" width="34" x="157" y="44" />
    </g>
    <g fill="#58BDF6">
      <circle cx="81" cy="19.5" r="1.5" />
      <circle cx="86" cy="19.5" r="1.5" />
      <circle cx="91" cy="19.5" r="1.5" />
      <circle cx="169" cy="50.5" r="1.5" />
      <circle cx="174" cy="50.5" r="1.5" />
      <circle cx="179" cy="50.5" r="1.5" />
    </g>
  </svg>
);

const Section01 = () => {
  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-white">
      <BackgroundVideo />
      <div className="wrapper relative z-10 min-h-[600px] justify-center py-14 sm:min-h-[650px] sm:py-16">
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

        <div className="mt-10 grid w-full max-w-[980px] grid-cols-1 gap-2.5 sm:grid-cols-3">
          <div className="group relative overflow-hidden rounded-[20px] border border-white/90 bg-white/60 px-4 py-3.5 shadow-[0_12px_32px_rgba(30,55,68,0.09)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue/70 hover:bg-white/75 hover:shadow-[0_18px_44px_rgba(40,117,158,0.14)]">
            <span aria-hidden="true" className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary-blue/20 blur-2xl transition-transform duration-500 group-hover:scale-125" />
            <p className="relative font-charter text-lg leading-tight tracking-[-0.025em] text-ink">
              Every stablecoin
            </p>
            <BrandCloud brands={stablecoins} />
          </div>

          <div className="group relative overflow-hidden rounded-[20px] border border-white/90 bg-white/60 px-4 py-3.5 shadow-[0_12px_32px_rgba(30,55,68,0.09)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue/70 hover:bg-white/75 hover:shadow-[0_18px_44px_rgba(40,117,158,0.14)]">
            <span aria-hidden="true" className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary-blue/20 blur-2xl transition-transform duration-500 group-hover:scale-125" />
            <p className="relative font-charter text-lg leading-tight tracking-[-0.025em] text-ink">
              Every chain
            </p>
            <BrandCloud brands={chains} />
          </div>

          <div className="group relative overflow-hidden rounded-[20px] border border-white/90 bg-white/60 px-4 py-3.5 shadow-[0_12px_32px_rgba(30,55,68,0.09)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue/70 hover:bg-white/75 hover:shadow-[0_18px_44px_rgba(40,117,158,0.14)]">
            <span aria-hidden="true" className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary-blue/20 blur-2xl transition-transform duration-500 group-hover:scale-125" />
            <p className="relative font-charter text-lg leading-tight tracking-[-0.025em] text-ink">
              Confidential
            </p>
            <ConfidentialVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section01;
