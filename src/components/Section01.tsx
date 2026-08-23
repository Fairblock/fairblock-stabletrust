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
      <radialGradient id="cipher-core" cx="0" cy="0" r="1" gradientTransform="translate(126 30) rotate(46) scale(24)">
        <stop stopColor="#E8F7FF" />
        <stop offset=".48" stopColor="#58BDF6" />
        <stop offset="1" stopColor="#168BCF" />
      </radialGradient>
      <filter id="secure-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" />
      </filter>
    </defs>

    <circle cx="130" cy="35" fill="#58BDF6" fillOpacity=".2" filter="url(#secure-glow)" r="25" />
    <path d="M48 16c26 0 43 9 57 17M48 54c26 0 43-9 57-17M212 16c-26 0-43 9-57 17M212 54c-26 0-43-9-57-17" stroke="url(#secure-link)" strokeDasharray="2 4" strokeLinecap="round" strokeWidth="1.4" />

    <g fill="#fff" stroke="#0B0D10" strokeOpacity=".48" strokeWidth="1.5">
      <circle cx="39" cy="15" r="9" />
      <circle cx="39" cy="55" r="9" />
      <circle cx="221" cy="15" r="9" />
      <circle cx="221" cy="55" r="9" />
    </g>
    <g fill="#58BDF6">
      <circle cx="36" cy="15" r="1.25" />
      <circle cx="42" cy="15" r="1.25" />
      <circle cx="36" cy="55" r="1.25" />
      <circle cx="42" cy="55" r="1.25" />
      <circle cx="218" cy="15" r="1.25" />
      <circle cx="224" cy="15" r="1.25" />
      <circle cx="218" cy="55" r="1.25" />
      <circle cx="224" cy="55" r="1.25" />
    </g>

    <g opacity=".85">
      <ellipse cx="130" cy="35" rx="38" ry="19" stroke="#58BDF6" strokeDasharray="2 3" />
      <ellipse cx="130" cy="35" rx="38" ry="19" stroke="#58BDF6" strokeDasharray="1 5" transform="rotate(62 130 35)" />
    </g>

    <g>
      <g fill="#fff" stroke="#58BDF6" strokeOpacity=".65">
        <rect height="9" rx="4.5" width="25" x="92" y="21" />
        <rect height="9" rx="4.5" width="25" x="143" y="12" />
        <rect height="9" rx="4.5" width="25" x="148" y="43" />
        <rect height="9" rx="4.5" width="25" x="99" y="51" />
      </g>
      <g fill="#168BCF" fontFamily="monospace" fontSize="5.5" fontWeight="700" letterSpacing=".45">
        <text x="98" y="27.4">7F3A</text>
        <text x="149" y="18.4">C91E</text>
        <text x="154" y="49.4">A2D8</text>
        <text x="105" y="57.4">9B4C</text>
      </g>
      <animateTransform attributeName="transform" dur="16s" from="0 130 35" repeatCount="indefinite" to="360 130 35" type="rotate" />
    </g>

    <g>
      <circle cx="130" cy="35" fill="#58BDF6" fillOpacity=".2" r="19">
        <animate attributeName="r" dur="3.6s" repeatCount="indefinite" values="18;22;18" />
        <animate attributeName="fill-opacity" dur="3.6s" repeatCount="indefinite" values=".22;.04;.22" />
      </circle>
      <path d="m130 21 12 7v14l-12 7-12-7V28z" fill="url(#cipher-core)" stroke="#fff" strokeWidth="1.5" />
      <g fill="#0B0D10">
        <circle cx="125" cy="31" r="1.2" />
        <circle cx="130" cy="31" r="1.2" />
        <circle cx="135" cy="31" r="1.2" />
        <circle cx="125" cy="35" r="1.2" />
        <circle cx="130" cy="35" r="1.2" />
        <circle cx="135" cy="35" r="1.2" />
        <circle cx="125" cy="39" r="1.2" />
        <circle cx="130" cy="39" r="1.2" />
        <circle cx="135" cy="39" r="1.2" />
      </g>
    </g>
  </svg>
);

const Section01 = () => {
  return (
    <section className="relative isolate min-h-[calc(100svh-52px)] overflow-hidden border-b border-line bg-white">
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
