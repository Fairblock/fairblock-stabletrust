const UniversalApp = () => {
  return (
    <section className="border-b border-line bg-white">
      <div className="wrapper grid gap-12 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-28 lg:gap-20">
        <div>
          <h2 className="section-title max-w-[620px]">
            The universal app for confidential stablecoin transfers.
          </h2>
          <p className="section-copy mt-6">
            Stabletrust Pay is the app users open to send stablecoins
            confidentially across chains. Choose the stablecoin, choose the
            network, and complete the transfer from one consistent experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Every stablecoin", "Every chain", "Confidential transfers"].map(
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

        <div className="overflow-hidden border border-line bg-white">
          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="border border-line bg-white p-5">
                <span className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                  Stablecoin
                </span>
                <p className="mt-3 font-charter text-2xl">Choose any stablecoin</p>
              </div>
              <div className="border border-line bg-white p-5">
                <span className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                  Network
                </span>
                <p className="mt-3 font-charter text-2xl">Choose any chain</p>
              </div>
            </div>
            <div className="mt-3 flex min-h-24 items-center justify-between bg-ink p-5 text-white">
              <div>
                <span className="text-xs tracking-[0.14em] text-primary-blue uppercase">
                  Transfer mode
                </span>
                <p className="mt-2 font-charter text-2xl">Confidential</p>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-blue text-xl text-ink">
                <span aria-hidden="true">→</span>
              </span>
            </div>
            <div className="mt-6 border-t border-dashed border-[#c9d6de] pt-5 text-center text-sm text-muted">
              One app for confidential transfers across stablecoins and chains
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversalApp;
