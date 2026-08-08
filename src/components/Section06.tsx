const PLATFORMS_AND_INVESTORS: string[] = [
  "s06-anagram.png",
  "s06-galileo.png",
  "s06-dialectic.png",
  "s06-lemniscap.png",
  "Robot Ventures",
  "s06-axelar.png",
  "s06-arbitrum.png",
  "s06-gsr.png",
  "s06-chorus-one.png",
  "s06-reverie.png",
  "s06-atom.png",
  "s06-dora-hacks.png",
  "Zaki Manian",
  "Waikit Lau",
  "Leland Lee",
  "Calvin Liu",
  "George Lambeth",
  "Xavier Meegan",
  "Stefan Coolican",
  "Richard Malone",
  "Collin Myers",
  "Batu",
];

const Section06 = () => {
  return (
    <section className="border-b border-line bg-white">
      <div className="wrapper py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label mb-5">Network and backing</p>
          <h2 className="section-title">Trusted by the Best</h2>
          <p className="section-copy mt-5">
            Supported by builders, institutions, and infrastructure leaders
            advancing confidential finance.
          </p>
        </div>
        <div className="mt-12 grid w-full grid-cols-2 border-l border-t border-line sm:grid-cols-3 md:grid-cols-5">
        {PLATFORMS_AND_INVESTORS.map((item: string) => (
          <div
            key={item}
            className="flex min-h-24 items-center justify-center border-b border-r border-line p-5"
          >
            {item.startsWith("s06") ? (
              <img
                className="max-h-8 max-w-28 grayscale opacity-75 transition-all duration-200 hover:grayscale-0 hover:opacity-100"
                src={`/${item}`}
                alt={item.replace("s06-", "").replace(".png", "")}
              />
            ) : (
              <p className="text-center text-sm font-medium text-[#4b5963]">
                {item}
              </p>
            )}
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Section06;
