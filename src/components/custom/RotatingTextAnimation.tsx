import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const rotatingTexts = [
  "Payments",
  "Trading",
  "Commerce",
  "Payroll",
  "Strategic Deals",
];

const AnimatedHeader = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-bold font-charter text-2xl sm:text-4xl">
      Incorruptible Money Movement for{" "}
      <span className="align-baseline inline-flex overflow-visible relative">
        <AnimatePresence mode="sync">
          <motion.span
            key={index}
            initial={{ y: 75, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{
              y: 0,
              opacity: 0,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.2,
              },
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="absolute left-0 top-0 italic whitespace-nowrap"
          >
            {rotatingTexts[index]}
          </motion.span>
        </AnimatePresence>

        {/* Invisible spacer sets width dynamically */}
        <span className="italic opacity-0 whitespace-nowrap">
          {rotatingTexts[index]}
        </span>
      </span>
    </div>
  );
};

export default AnimatedHeader;
