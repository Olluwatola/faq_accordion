//import React from "react";
import Accordion from "./../components/Accordion";
import starIcon from "./../assets/images/icon-star.svg";

const AcccordionPage = () => {
  return (
    <>
      <div className="border w-72 bg-white drop-shadow-xl hover:drop-shadow-2xl rounded-2xl mx-3  h-full p-6">
        <div className="font-extrabold text-fuchsia-950 hover:text-pink-700 text-4xl text-left">
          <div className="flex items-center">
            <img src={starIcon} alt="star-icon" className="w-8 h-8 mr-4 " />
            FAQs
          </div>
        </div>
        <Accordion />
      </div>
    </>
  );
};

export default AcccordionPage;
