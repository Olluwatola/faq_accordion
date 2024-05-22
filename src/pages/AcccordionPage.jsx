//import React from "react";
import Accordion from "./../components/Accordion";

const AcccordionPage = () => {
  return (
    <>
      <div className="border bg-white drop-shadow-xl hover:drop-shadow-2xl border-sky-500 rounded-2xl mx-3 w-full h-full p-6">
        <div className="font-extrabold text-fuchsia-950 hover:text-pink-700 text-4xl text-left">
          FAQs
        </div>
        <Accordion />
      </div>
    </>
  );
};

export default AcccordionPage;
