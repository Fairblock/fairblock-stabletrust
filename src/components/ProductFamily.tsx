type Product = {
  id: string;
  name: string;
  label: string;
  description: string;
  href?: string;
  linkLabel?: string;
  featured: boolean;
  comingSoon?: boolean;
};

const PRODUCTS: Product[] = [
  {
    id: "01",
    name: "Stabletrust Pay",
    label: "Flagship application",
    description:
      "The universal app for users to connect a wallet and send confidential stablecoin transfers across chains.",
    href: "https://app.stabletrust.io/",
    linkLabel: "Launch Stabletrust Pay",
    featured: true,
  },
  {
    id: "02",
    name: "Stabletrust Pro",
    label: "Coming soon",
    description:
      "The institutional edition of Stabletrust Pay, with MPC-backed wallets, work email and passkey access, team management, and batch payroll, treasury, and supply chain transfers.",
    featured: false,
    comingSoon: true,
  },
  {
    id: "03",
    name: "Stabletrust SDK",
    label: "For builders",
    description:
      "Embed confidential transfers into wallets, neobanks, agents, and partner applications for every asset or a specific use case.",
    href: "https://docs.fairblock.network/ct/guides/build/building-with-sdk",
    linkLabel: "Build with the SDK",
    featured: false,
  },
  {
    id: "04",
    name: "Stabletrust API",
    label: "For integrations",
    description:
      "Use the Stabletrust API to enable confidential agentic payments or add confidential transfers to applications built with Turnkey or Privy. Support every available asset and chain, or only the ones your product needs.",
    href: "https://docs.fairblock.network/ct/guides/build/agentic-api",
    linkLabel: "Build with the API",
    featured: false,
  },
  {
    id: "05",
    name: "CUSD",
    label: "Flagship Confidential Stablecoin With Incentives",
    description:
      "Fairblock's flagship confidential stablecoin, built with M0, PayPal, and MoonPay. It uses the same confidentiality infrastructure while offering additional incentives, including yield and points, for users and partners.",
    href: "https://cusd.fairblock.network/",
    linkLabel: "Visit CUSD",
    featured: false,
  },
  {
    id: "06",
    name: "Compliance Dashboard",
    label: "For compliance teams",
    description:
      "Review confidential activity and manage selective disclosure through a controlled workspace built for authorized compliance, audit, and regulatory workflows.",
    href: "https://docs.fairblock.network/ct/how-it-works/compliance",
    linkLabel: "Explore compliance architecture",
    featured: false,
  },
];

const ProductFamily = () => {
  return (
    <section className="border-b border-line bg-white">
      <div className="wrapper py-20 sm:py-28">
        <div className="max-w-3xl">
          <p className="section-label mb-5">Stabletrust product family</p>
          <h2 className="section-title">
            Confidential and compliant stablecoin transfers, delivered your
            way.
          </h2>
          <p className="section-copy mt-6">
            Stabletrust is Fairblock's product for confidential and compliant
            stablecoin transfers on any chain. Stabletrust Pay is the flagship
            app, Stabletrust Pro is designed for institutional teams, and the SDK
            and API let partners build the same functionality into their own
            products. The Compliance Dashboard supports authorized review and
            selective disclosure workflows.
          </p>
        </div>

        <div className="mt-12 grid border-l border-t border-line md:grid-cols-2">
          {PRODUCTS.map((product) => (
            <article
              className={`relative flex min-h-72 flex-col border-b border-r p-6 sm:p-8 ${
                product.featured
                  ? "border-primary-blue bg-[#eef8fd]"
                  : "border-line bg-white"
              }`}
              key={product.id}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs text-[#82909a]">
                  {product.id}
                </span>
                <span
                  className={`text-xs font-semibold tracking-[0.12em] uppercase ${
                    product.featured ? "text-[#2587ba]" : "text-muted"
                  }`}
                >
                  {product.featured ? "You are here" : product.label}
                </span>
              </div>
              <h3 className="mt-10 font-charter text-3xl tracking-[-0.02em]">
                {product.name}
              </h3>
              <p className="mt-4 max-w-xl leading-6 text-muted">
                {product.description}
              </p>
              {product.comingSoon ? (
                <span className="mt-auto pt-8 text-sm font-semibold text-muted">
                  Coming soon
                </span>
              ) : product.href && product.linkLabel ? (
                <a
                  className="mt-auto pt-8 text-sm font-semibold text-[#237faa]"
                  href={product.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {product.linkLabel}
                  <span aria-hidden="true" className="ml-2">
                    ↗
                  </span>
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFamily;
