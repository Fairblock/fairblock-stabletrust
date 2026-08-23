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
    shapeRendering="geometricPrecision"
    viewBox="0 0 260 70"
  >
    <defs>
      <linearGradient id="secure-link" x1="42" x2="218" y1="35" y2="35" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0B0D10" stopOpacity=".2" />
        <stop offset=".5" stopColor="#58BDF6" stopOpacity=".9" />
        <stop offset="1" stopColor="#0B0D10" stopOpacity=".2" />
      </linearGradient>
      <radialGradient id="liquid-core" cx="0" cy="0" r="1" gradientTransform="translate(124 29) rotate(48) scale(25)">
        <stop stopColor="#214E63" />
        <stop offset=".28" stopColor="#0A2635" />
        <stop offset=".66" stopColor="#03131D" />
        <stop offset="1" stopColor="#010609" />
      </radialGradient>
      <linearGradient id="liquid-ribbon" x1="113" x2="148" y1="25" y2="47" gradientUnits="userSpaceOnUse">
        <stop stopColor="#B7EDFF" stopOpacity=".72" />
        <stop offset=".38" stopColor="#42B9F2" stopOpacity=".38" />
        <stop offset="1" stopColor="#0474AA" stopOpacity=".06" />
      </linearGradient>
      <clipPath id="liquid-clip">
        <circle cx="130" cy="35" r="16" />
      </clipPath>
      <filter id="secure-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" />
      </filter>
      <filter id="plasma-soft" x="-15%" y="-15%" width="130%" height="130%">
        <feGaussianBlur stdDeviation=".65" />
      </filter>
    </defs>

    <circle cx="130" cy="35" fill="#58BDF6" fillOpacity=".2" filter="url(#secure-glow)" r="25" />
    <path d="M45 15c28 1 46 10 61 19M45 55c28-1 46-10 61-19M215 15c-28 1-46 10-61 19M215 55c-28-1-46-10-61-19" stroke="url(#secure-link)" strokeLinecap="round" strokeOpacity=".62" strokeWidth=".8" />

    <g fill="#07131A" fillOpacity=".84">
      <circle cx="39" cy="15" r="3.8" />
      <circle cx="39" cy="55" r="3.8" />
      <circle cx="221" cy="15" r="3.8" />
      <circle cx="221" cy="55" r="3.8" />
    </g>
    <g fill="#58BDF6" fillOpacity=".9">
      <circle cx="39" cy="15" r=".9" />
      <circle cx="39" cy="55" r=".9" />
      <circle cx="221" cy="15" r=".9" />
      <circle cx="221" cy="55" r=".9" />
    </g>

    <g fill="#7AD5FF">
      <circle r="1">
        <animate attributeName="opacity" dur="7s" repeatCount="indefinite" values="0;0;.7;.7;0;0" />
        <animateMotion dur="7s" path="M48 16c26 0 43 9 57 17" repeatCount="indefinite" />
      </circle>
      <circle r="1">
        <animate attributeName="opacity" begin="1.8s" dur="7s" repeatCount="indefinite" values="0;0;.7;.7;0;0" />
        <animateMotion begin="1.8s" dur="7s" path="M212 54c-26 0-43-9-57-17" repeatCount="indefinite" />
      </circle>
      <circle r="1">
        <animate attributeName="opacity" begin="3.6s" dur="7s" repeatCount="indefinite" values="0;0;.7;.7;0;0" />
        <animateMotion begin="3.6s" dur="7s" path="M48 54c26 0 43-9 57-17" repeatCount="indefinite" />
      </circle>
      <circle r="1">
        <animate attributeName="opacity" begin="5.4s" dur="7s" repeatCount="indefinite" values="0;0;.7;.7;0;0" />
        <animateMotion begin="5.4s" dur="7s" path="M212 16c-26 0-43 9-57 17" repeatCount="indefinite" />
      </circle>
    </g>

    <g>
      <circle cx="130" cy="35" fill="#168BCF" fillOpacity=".14" filter="url(#secure-glow)" r="23">
        <animate attributeName="r" calcMode="spline" dur="5.2s" keySplines=".2 0 .2 1;.2 0 .2 1;.2 0 .2 1;.2 0 .2 1;.2 0 .2 1" keyTimes="0;.08;.17;.27;.38;1" repeatCount="indefinite" values="21;24;21.7;23;21;21" />
        <animate attributeName="fill-opacity" dur="5.2s" keyTimes="0;.08;.17;.27;.38;1" repeatCount="indefinite" values=".08;.18;.1;.15;.08;.08" />
      </circle>

      <path d="M130 18.8C140 18.5 147.2 25.9 146.2 36.2C145.4 46.1 138.4 52.1 128.4 51.4C118.7 50.9 112.9 44.2 113.7 34.5C114.5 24.8 120.5 19.2 130 18.8Z" fill="#168BCF" fillOpacity=".18" filter="url(#secure-glow)" />
      <path d="M130 18.8C140 18.5 147.2 25.9 146.2 36.2C145.4 46.1 138.4 52.1 128.4 51.4C118.7 50.9 112.9 44.2 113.7 34.5C114.5 24.8 120.5 19.2 130 18.8Z" fill="url(#liquid-core)" />
      <g clipPath="url(#liquid-clip)">
        <g filter="url(#plasma-soft)">
          <path d="M109 39C116 23 128 18 144 24C152 28 150 39 140 47C129 55 114 50 109 39Z" fill="url(#liquid-ribbon)" fillOpacity=".54" />
          <animateTransform attributeName="transform" dur="8s" repeatCount="indefinite" type="translate" values="-1 1;2 -1;-1 1" />
        </g>
        <g filter="url(#plasma-soft)">
          <path d="M111 46C120 34 133 29 150 32C144 45 132 51 117 50C113 49 111 47 111 46Z" fill="#168BCF" fillOpacity=".24" />
          <animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="translate" values="2 -1;-2 1;2 -1" />
        </g>
        <g>
          <ellipse cx="124" cy="29" fill="#AEEAFF" fillOpacity=".2" rx="4.5" ry="1.4" />
          <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-1 0;3 1;-1 0" />
          <animate attributeName="opacity" dur="7s" repeatCount="indefinite" values=".55;1;.55" />
        </g>
        <path d="M116 39C123 34 136 33 144 28" stroke="#7AD5FF" strokeDasharray="2 3" strokeOpacity=".4" strokeWidth=".65">
          <animate attributeName="stroke-dashoffset" dur="9s" from="0" repeatCount="indefinite" to="-20" />
          <animate attributeName="stroke-opacity" dur="9s" repeatCount="indefinite" values=".18;.52;.18" />
        </path>
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
