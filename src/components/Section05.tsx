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
    <div className="bg-white rounded-xl">
      <img className="border-b-2 border-primary-blue min-h-56 object-cover rounded-t-xl" src={imgUrl} alt={title} />
      <div className="p-6">
        <h5 className="font-charter font-bold mb-2 text-xl sm:text-2xl">{title}</h5>
        <p className="font-sf-pro-display sm:text-lg">{content}</p>
      </div>
    </div>
  );
};

const Section05 = () => {
  return (
    <div className="wrapper bg-linear-to-b from-primary-blue via-primary-blue to-white py-12">
      <h3 className="font-bold font-charter text-2xl sm:text-4xl">
        Why Stabletrust
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
  );
};

export default Section05;
