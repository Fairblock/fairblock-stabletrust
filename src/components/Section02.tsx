const Section02 = () => {
  return (
    <section className="border-b border-line bg-white">
      <div className="wrapper py-20 md:py-28">
        <div className="max-w-4xl">
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
      </div>
    </section>
  );
};

export default Section02;
