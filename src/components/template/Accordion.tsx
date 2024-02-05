// src/components/Accordion.tsx
import React, { useState, ReactNode } from "react";
import Image from "next/image";
import ChatText from "../atoms/ChatText";
interface AccordionProps {
  question: string;
  answer: ReactNode | (() => JSX.Element);
}

const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`border rounded overflow-hidden transition-all duration-300 ${
        isOpen ? "h-auto" : "h-14"
      }`}
    >
      <div
        className={`p-4 cursor-pointer flex justify-between items-center ${
          isOpen
            ? "bg-blue-500 text-white"
            : "hover:bg-blue-500 hover:text-white"
        }`}
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-semibold">{question}</h2>
        <span className="text-xl">{isOpen ? "-" : "+"}</span>
      </div>
      <div className={`p-4 border-t ${isOpen ? "block" : "hidden"}`}>
        <h2>Figma 시안</h2>
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src={`/images/${question}.jpg`}
          alt={question}
          style={{ width: "700px", height: "auto", margin: "0 auto" }}
        />
        <ChatText tagMessage={question} />
        <p>Result</p>
        {typeof answer === "function" ? (answer as () => ReactNode)() : answer}
      </div>
    </div>
  );
};

export default Accordion;
