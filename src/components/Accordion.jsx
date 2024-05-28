//import React from 'react'
import AccordionLine from "./AccordionLine";

const Accordion = () => {
  const FAQs = [
    { question: "Who are you?", answer: "I am he that shall not be named" },
    {
      question: "Where are you from?",
      answer: "I am from where shall not be named",
    },
    {
      question: "Why are you here?",
      answer: "I am here to... yunno, Harry Potter!!",
    },
  ];

  return (
    <>
      <div className=" divide-y-2 text-wrap">
        {FAQs.map(({ question, answer }) => (
          <AccordionLine key={question} question={question} answer={answer} />
        ))}
      </div>
    </>
  );
};

export default Accordion;
