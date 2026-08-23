type CardProps = {
  id: string;
  imgUrl: string;
  title: string;
  content: string;
};

const CARD_DETAILS = [
  {
    id: "01",
    imgUrl: "/s05-card-1.svg",
    title: "On the Chains and Apps You Already Use",
    content:
      "One-click confidentiality where you are. No bridging funds to isolated privacy chains or new-wallet gymnastics. No more losing privacy the moment you bridge funds back out.",
  },
  {
    id: "02",
    imgUrl: "/s05-card-2.svg",
    title: "Fast and Cheap Confidentiality",
    content:
      "Confidential transfers that feel like normal transfers. No multi-minute proof wait time. No expensive fees. Pay only when confidentiality adds value to execution, not for P2P transfers.",
  },
  {
    id: "03",
    imgUrl: "/s05-card-3.svg",
    title: "Selective Disclosure on Demand",
    content:
      "When required, disclose a specific transaction to finance, auditors, regulators, or banks without exposing your entire history. It’s what institutions need for reporting. ",
  },
  {
    id: "04",
    imgUrl: "/s05-card-4.svg",
    title: "No Black Boxes",
    content:
      "No single TEE designs that can be compromised. No offchain coprocessor you’re forced to trust. The math is enforced with cryptography and verified onchain.",
  },
];

const Card = ({ imgUrl, title, content }: CardProps) => {
  return (
    <article className="overflow-hidden border border-line bg-white">
      <div className="h-52 overflow-hidden border-b border-line bg-white">
        <img className="h-full w-full object-cover" src={imgUrl} alt="" />
      </div>
      <div className="p-6 sm:p-7">
        <h3 className="font-charter text-2xl leading-tight tracking-[-0.02em]">
          {title}
        </h3>
        <p className="mt-3 leading-6 text-muted">{content}</p>
      </div>
    </article>
  );
};

const Section05 = () => {
  return (
    <section className="border-b border-line bg-white">
      <div className="wrapper py-20 sm:py-28">
        <h2 className="section-title">Why Stabletrust Pay</h2>
        <p className="section-copy mt-6">
          Confidentiality designed for production environments, not isolated
          experiments.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
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

export default Section05;
