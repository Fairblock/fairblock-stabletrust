// components
import BackgroundVideo from "./custom/BackgroundVideo";
import TypingTextAnimation from "./custom/TypingTextAnimation";

const words = ["Payments", "Trading", "Commerce", "Payroll", "Strategic Deals"];

const Section01 = () => {
  return (
    <div className="wrapper min-h-80 mt-20 w-full!">
      <BackgroundVideo />
      <h2 className="font-bold font-charter text-2xl sm:text-4xl">
        Incorruptible Money Movement for{" "}
        <span className="italic">
          <TypingTextAnimation texts={words} />
        </span>
      </h2>
      <p className="font-light font-sf-pro-display sm:text-lg max-w-[400px]">
        Confidential stablecoins that keep amounts and balances private for
        users, businesses, and institutions. You decide who can see what and
        when.
      </p>
      <a
        className="primary-button"
        href="https://stabletrust.fairblock.network/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Get Started
      </a>
    </div>
  );
};

export default Section01;
