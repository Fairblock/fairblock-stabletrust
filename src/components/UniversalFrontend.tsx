const UniversalFrontend = () => {
  const integrationPoints = ["Wallets", "Stablecoins", "Applications", "Blockchains"];

  return (
    <section className="border-b border-line bg-surface">
      <div className="wrapper grid gap-12 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-28 lg:gap-20">
        <div>
          <p className="section-label mb-5">Universal frontend</p>
          <h2 className="section-title max-w-[620px]">
            One Application. Every Stablecoin. Every Chain.
          </h2>
          <p className="section-copy mt-6">
            Stabletrust Pay gives users one consistent interface for
            confidential stablecoins across blockchain ecosystems, without
            forcing them into isolated privacy networks.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Chain-agnostic", "Compliance-ready", "API accessible"].map(
              (attribute) => (
                <span
                  className="rounded-full border border-[#c9d6de] bg-white px-3 py-1.5 text-sm text-[#35434d]"
                  key={attribute}
                >
                  {attribute}
                </span>
              )
            )}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_20px_60px_rgba(20,42,56,0.08)]">
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary-blue" />
              <span className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                Integration layer
              </span>
            </div>
            <span className="font-mono text-xs text-[#82909a]">ST / 01</span>
          </div>
          <div className="relative p-6 sm:p-10">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {integrationPoints.map((point) => (
                <div
                  className="flex min-h-20 items-center justify-center rounded-xl border border-line bg-surface px-3 text-center text-sm font-medium text-[#3b4a54]"
                  key={point}
                >
                  {point}
                </div>
              ))}
            </div>
            <div className="relative z-10 mx-auto -mt-[116px] flex h-28 w-28 flex-col items-center justify-center rounded-full border-[6px] border-white bg-ink text-center text-white shadow-xl sm:-mt-[124px] sm:h-32 sm:w-32">
              <span className="text-xs tracking-[0.14em] text-[#9ed8f7] uppercase">
                One interface
              </span>
              <strong className="mt-1 font-charter text-xl font-normal">
                Stabletrust
              </strong>
            </div>
            <div className="mt-6 border-t border-dashed border-[#c9d6de] pt-5 text-center text-sm text-muted">
              Confidentiality orchestration across the application stack
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversalFrontend;
