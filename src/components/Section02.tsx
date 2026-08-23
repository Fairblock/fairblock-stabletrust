const Section02 = () => {
  return (
    <section className="border-b border-line bg-white">
      <div className="wrapper grid gap-12 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28 lg:gap-20">
        <div>
          <h2 className="section-title">Stop the Leak</h2>
          <div className="section-copy mt-6 flex flex-col gap-5">
            <p>
              Moving money onchain means leaking sensitive financial
              information. Anyone can see how much you paid, who you paid, when
              you paid, and how much you still hold.
            </p>
            <p>
              That exposes salaries, vendor terms, treasury movements, and
              strategy in real time. That is not how real business operates.
            </p>
          </div>
        </div>

        <figure className="relative overflow-hidden border border-[#bfcbd3] bg-white">
          <div className="p-6 sm:p-9">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h3 className="font-charter text-4xl tracking-[-0.03em] sm:text-5xl">
                confidentiality
              </h3>
              <span className="text-sm italic text-muted">noun</span>
            </div>
            <p className="mt-3 font-mono text-sm text-[#62717c]">
              / kon-fi-den-shi-al-i-tee /
            </p>
            <div className="mt-8 border-t border-ink pt-5">
              <div className="grid grid-cols-[24px_1fr] gap-3">
                <span className="font-charter text-lg">1.</span>
                <p className="font-charter text-2xl leading-tight tracking-[-0.02em] sm:text-3xl">
                  Incorruptible money movement with built-in compliance.
                </p>
              </div>
            </div>
            <figcaption className="mt-8 flex items-center gap-3 text-xs tracking-[0.12em] text-muted uppercase">
              <span className="h-px w-8 bg-primary-blue" />
              The operating principle behind Stabletrust
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Section02;
