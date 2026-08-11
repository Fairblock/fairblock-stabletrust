type CardProps = {
  id: string;
  imgUrl: string;
  title: string;
  content: string;
};

const CARD_DETAILS = [
  {
    id: "01",
    imgUrl: "/s03-individuals.svg",
    title: "Individuals",
    content:
      "Keep payments and transfers private. Protect your financial activity and relationships.",
  },
  {
    id: "02",
    imgUrl: "/s03-traders.svg",
    title: "Traders",
    content:
      "Keep positions, OTC transactions, and execution strategies confidential. Stop bots and copy traders from reading your moves.",
  },
  {
    id: "03",
    imgUrl: "/s03-business-and-institutions.svg",
    title: "Businesses and Institutions",
    content:
      "Keep payroll, payouts, treasury operations, revenue, business relationships, and supply chain transfers confidential. Protect your commercial edge and regulatory standing.",
  },
];

const Card = ({ id, imgUrl, title, content }: CardProps) => {
  return (
    <article className="flex flex-col border border-line bg-white p-6 sm:p-7">
      <div className="flex items-center justify-between border-b border-line pb-4">
        <span className="font-mono text-xs tracking-[0.14em] text-muted">{id}</span>
        <span className="h-2 w-2 rounded-full bg-primary-blue" />
      </div>
      <div className="flex flex-1 flex-col">
        <img
          className="my-9 h-24 w-full object-contain"
          src={imgUrl}
          alt={title}
        />
        <h3 className="font-charter text-2xl tracking-[-0.02em]">
          {title}
        </h3>
        <p className="mt-3 leading-6 text-muted">{content}</p>
      </div>
    </article>
  );
};

const Section03 = () => {
  return (
    <section className="border-b border-line bg-white">
      <div className="wrapper py-20 sm:py-28">
        <p className="section-label mb-5">Who it protects</p>
        <h2 className="section-title">Protect What Matters</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {CARD_DETAILS.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              imgUrl={card.imgUrl}
              title={card.title}
              content={card.content}
            />
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default Section03;
