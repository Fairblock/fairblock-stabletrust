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
      <radialGradient id="orbital-core" cx="0" cy="0" r="1" gradientTransform="translate(126 30) rotate(48) scale(19)">
        <stop stopColor="#FFFFFF" />
        <stop offset=".25" stopColor="#DDF5FF" />
        <stop offset=".6" stopColor="#58BDF6" />
        <stop offset="1" stopColor="#0877BC" />
      </radialGradient>
      <linearGradient id="orbit-shimmer" x1="106" x2="154" y1="27" y2="43" gradientUnits="userSpaceOnUse">
        <stop stopColor="#58BDF6" stopOpacity=".08" />
        <stop offset=".36" stopColor="#FFFFFF" stopOpacity=".96" />
        <stop offset=".62" stopColor="#58BDF6" stopOpacity=".9" />
        <stop offset="1" stopColor="#168BCF" stopOpacity=".12" />
      </linearGradient>
      <filter id="secure-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" />
      </filter>
    </defs>

    <circle cx="130" cy="35" fill="#58BDF6" fillOpacity=".2" filter="url(#secure-glow)" r="25" />
    <path d="M48 16c26 0 43 9 57 17M48 54c26 0 43-9 57-17M212 16c-26 0-43 9-57 17M212 54c-26 0-43-9-57-17" stroke="url(#secure-link)" strokeDasharray="2 4" strokeLinecap="round" strokeWidth="1.4">
      <animate attributeName="stroke-dashoffset" dur="8s" from="0" repeatCount="indefinite" to="-24" />
    </path>

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
      <ellipse cx="130" cy="35" rx="38" ry="19" stroke="#58BDF6" strokeDasharray="2 3">
        <animate attributeName="stroke-dashoffset" dur="10s" from="0" repeatCount="indefinite" to="-20" />
      </ellipse>
      <ellipse cx="130" cy="35" rx="38" ry="19" stroke="#58BDF6" strokeDasharray="1 5" transform="rotate(62 130 35)">
        <animate attributeName="stroke-dashoffset" dur="12s" from="0" repeatCount="indefinite" to="24" />
      </ellipse>
    </g>

    <g opacity=".92">
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
      <animate attributeName="opacity" dur="7s" repeatCount="indefinite" values=".76;.96;.84;.92;.76" />
    </g>

    <g fill="#BCE9FF" filter="url(#secure-glow)">
      <circle r="1.4">
        <animate attributeName="opacity" dur="7s" repeatCount="indefinite" values="0;0;.85;.85;0;0" />
        <animateMotion dur="7s" path="M48 16c26 0 43 9 57 17" repeatCount="indefinite" />
      </circle>
      <circle r="1.4">
        <animate attributeName="opacity" begin="1.8s" dur="7s" repeatCount="indefinite" values="0;0;.85;.85;0;0" />
        <animateMotion begin="1.8s" dur="7s" path="M212 54c-26 0-43-9-57-17" repeatCount="indefinite" />
      </circle>
      <circle r="1.4">
        <animate attributeName="opacity" begin="3.6s" dur="7s" repeatCount="indefinite" values="0;0;.85;.85;0;0" />
        <animateMotion begin="3.6s" dur="7s" path="M48 54c26 0 43-9 57-17" repeatCount="indefinite" />
      </circle>
      <circle r="1.4">
        <animate attributeName="opacity" begin="5.4s" dur="7s" repeatCount="indefinite" values="0;0;.85;.85;0;0" />
        <animateMotion begin="5.4s" dur="7s" path="M212 16c-26 0-43 9-57 17" repeatCount="indefinite" />
      </circle>
    </g>

    <g>
      <circle cx="130" cy="35" fill="#58BDF6" fillOpacity=".2" r="23">
        <animate attributeName="r" calcMode="spline" dur="4.8s" keySplines=".2 0 .2 1;.2 0 .2 1;.2 0 .2 1;.2 0 .2 1;.2 0 .2 1" keyTimes="0;.09;.18;.28;.4;1" repeatCount="indefinite" values="22;25;22.6;24;22;22" />
        <animate attributeName="fill-opacity" calcMode="spline" dur="4.8s" keySplines=".2 0 .2 1;.2 0 .2 1;.2 0 .2 1;.2 0 .2 1;.2 0 .2 1" keyTimes="0;.09;.18;.28;.4;1" repeatCount="indefinite" values=".16;.3;.18;.26;.16;.16" />
      </circle>

      <g opacity=".9" stroke="url(#orbit-shimmer)" strokeLinecap="round">
        <ellipse cx="130" cy="35" rx="30" ry="10" strokeDasharray="3 2.5" strokeWidth="1.35" transform="rotate(-14 130 35)">
          <animate attributeName="stroke-dashoffset" dur="8.5s" from="0" repeatCount="indefinite" to="-22" />
        </ellipse>
        <ellipse cx="130" cy="35" rx="27" ry="8.5" strokeDasharray="1 3" strokeWidth="1.1" transform="rotate(58 130 35)">
          <animate attributeName="stroke-dashoffset" dur="10s" from="0" repeatCount="indefinite" to="18" />
        </ellipse>
      </g>

      <circle cx="130" cy="35" fill="url(#orbital-core)" r="14.5" stroke="#FFFFFF" strokeOpacity=".9" strokeWidth="1.35">
        <animate attributeName="r" calcMode="spline" dur="4.8s" keySplines=".2 0 .2 1;.2 0 .2 1;.2 0 .2 1;.2 0 .2 1;.2 0 .2 1" keyTimes="0;.09;.18;.28;.4;1" repeatCount="indefinite" values="14.2;15.4;14.5;15;14.2;14.2" />
      </circle>
      <ellipse cx="125.5" cy="30.5" fill="#FFFFFF" fillOpacity=".72" rx="5.2" ry="2.8" transform="rotate(-24 125.5 30.5)" />
      <circle cx="130" cy="35" fill="none" r="9.4" stroke="#E8F7FF" strokeDasharray="1 2.5" strokeOpacity=".75">
        <animate attributeName="stroke-dashoffset" dur="7s" from="0" repeatCount="indefinite" to="-14" />
      </circle>

      <g fill="#FFFFFF" stroke="#58BDF6" strokeWidth=".6">
        <circle r="1.8">
          <animateMotion dur="8.5s" path="M107 40c8 10 38 8 46-5s-21-13-42-5-11 19 9 22 37-12 21-23-17-14-34-4-8 22 12 26" repeatCount="indefinite" />
        </circle>
        <circle fill="#A9E3FF" r="1.45">
          <animateMotion begin="-4.2s" dur="8.5s" path="M107 40c8 10 38 8 46-5s-21-13-42-5-11 19 9 22 37-12 21-23-17-14-34-4-8 22 12 26" repeatCount="indefinite" />
        </circle>
      </g>

      <g stroke="#FFFFFF" strokeLinecap="round" strokeWidth=".8">
        <path d="M109 23v5M106.5 25.5h5" />
        <path d="M151 44v4M149 46h4" />
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
