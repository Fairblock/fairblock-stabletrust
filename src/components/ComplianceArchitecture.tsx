const COMPLIANCE_LAYERS = [
  {
    id: "01",
    title: "Perimeter screening",
    description: "Screen transparent addresses before assets enter or leave the confidential system.",
  },
  {
    id: "02",
    title: "Protocol containment",
    description: "Restrict identified accounts without granting general custody or discretionary access to user funds.",
  },
  {
    id: "03",
    title: "Issuer enforcement",
    description: "Preserve the native controls of the underlying stablecoin or tokenized-asset issuer.",
  },
  {
    id: "04",
    title: "Selective disclosure",
    description: "Reveal relevant encrypted amounts only for an authorized, narrowly defined review scope.",
  },
];

const ComplianceArchitecture = () => {
  return (
    <section
      className="scroll-mt-20 border-b border-line bg-[#0b0d10] text-white"
      id="compliance-architecture"
    >
      <div className="wrapper py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <h2 className="font-charter text-4xl leading-[1.02] tracking-[-0.035em] sm:text-6xl">
              Confidential by design. Compliant by architecture.
            </h2>
            <p className="mt-6 max-w-xl text-lg font-light leading-7 text-[#bdc5ca] sm:text-xl sm:leading-8">
              Addresses and transaction relationships remain traceable while
              transaction amounts stay encrypted. Four independent layers
              preserve the controls expected by institutional payment
              infrastructure.
            </p>
            <a
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-[10px] border border-white/30 px-5 text-[0.9375rem] font-medium transition-colors duration-200 hover:border-white hover:bg-white hover:text-ink"
              href="https://docs.fairblock.network/ct/how-it-works/compliance"
              rel="noopener noreferrer"
              target="_blank"
            >
              Explore the compliance architecture
              <span aria-hidden="true" className="ml-2">
                ↗
              </span>
            </a>
          </div>

          <ol className="grid border-l border-t border-white/15 sm:grid-cols-2">
            {COMPLIANCE_LAYERS.map((layer) => (
              <li
                className="min-h-52 border-b border-r border-white/15 p-6 sm:p-7"
                key={layer.id}
              >
                <span className="font-mono text-xs tracking-[0.14em] text-[#8d989f]">
                  {layer.id}
                </span>
                <h3 className="mt-10 font-charter text-2xl leading-tight">
                  {layer.title}
                </h3>
                <p className="mt-3 leading-6 text-[#aeb8be]">
                  {layer.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ComplianceArchitecture;
