import { useState, useEffect } from "react";

interface TypingAnimationProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

export default function TypingTextAnimation({
  texts,
  typingSpeed = 100,
  deletingSpeed = 60,
  delayBetween = 1200,
}: TypingAnimationProps) {
  const [index, setIndex] = useState(0); // which word
  const [subIndex, setSubIndex] = useState(0); // which character
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = texts[index];

    // ✔ When typing
    if (!isDeleting) {
      if (subIndex < currentWord.length) {
        const typingTimeout = setTimeout(() => {
          setSubIndex((prev) => prev + 1);
        }, typingSpeed);

        return () => clearTimeout(typingTimeout);
      } else {
        // full word typed → wait → start deleting
        const waitTimeout = setTimeout(() => setIsDeleting(true), delayBetween);
        return () => clearTimeout(waitTimeout);
      }
    }

    // ✔ When deleting
    if (isDeleting) {
      if (subIndex > 0) {
        const deletingTimeout = setTimeout(() => {
          setSubIndex((prev) => prev - 1);
        }, deletingSpeed);

        return () => clearTimeout(deletingTimeout);
      } else {
        // word deleted → move to next
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [
    subIndex,
    isDeleting,
    index,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetween,
  ]);

  return (
    <span className="inline-block">
      {texts[index].substring(0, subIndex)}
      <span className="border-r-2 border-white ml-0.5 animate-pulse"></span>
    </span>
  );
}
