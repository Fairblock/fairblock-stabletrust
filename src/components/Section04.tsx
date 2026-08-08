const STEPS = [
  {
    title: "Payments",
    description:
      "Pay employees, contractors, partners, and vendors without leaking comp, rates, or terms",
    image: "/s04-payments.png",
  },
  {
    title: "Treasury",
    description:
      "Move funds between OTC desks, DAOs, and institutions without signalling liquidity strategy or cash runway.",
    image: "/s04-trading.svg",
  },
  {
    title: "Trading",
    description:
      "Build, balance, and settle positions without telling the market what you’re doing.",
    image: "/s04-treasury.svg",
  },
  {
    title: "Cross-Border",
    description:
      "Send stablecoins globally, keep amounts confidential, and still satisfy auditors, regulators, and banks on request.",
    image: "/s04-cross-border.svg",
  },
  {
    title: "Strategic Deals",
    description:
      "Make acquisitions or buy back tokens privately. No free early signal on block explorers.",
    image: "/s04-strategic-deals.svg",
  },
  {
    title: "RWA",
    description:
      "Trade tokenized securities confidentially while keeping portfolio composition private.",
    image: "/s04-rwa.svg",
  },
];

const Section04 = () => {
  return (
    <section className="border-b border-line bg-white">
      <div className="wrapper py-20 sm:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-label mb-5">Institutional use cases</p>
            <h2 className="section-title">Built for Real Business</h2>
          </div>
          <a
            className="secondary-button"
            href="https://docs.fairblock.network/docs/confidential_transfers/confidential_transactions"
            rel="noopener noreferrer"
            target="_blank"
          >
            View all use cases
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <article
              className="group overflow-hidden rounded-xl border border-line bg-white transition-transform duration-200 hover:-translate-y-1"
              key={step.title}
            >
              <div className="flex h-36 items-center justify-center overflow-hidden border-b border-line bg-surface">
                <img
                  className="h-full w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-[1.03]"
                  src={step.image}
                  alt=""
                />
              </div>
              <div className="p-6">
                <span className="font-mono text-xs text-[#70808b]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-charter text-2xl">{step.title}</h3>
                <p className="mt-3 leading-6 text-muted">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section04;
