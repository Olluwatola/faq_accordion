import { useState } from "react";
import Answer from "./Answer";
import plusIcon from "./../assets/images/icon-plus.svg";
import minusIcon from "./../assets/images/icon-minus.svg";

const AccordionLine = ({ question, answer }) => {
  const [openQuestion, setOpenQuestion] = useState(false);

  const handleOpenQuestion = () => {
    setOpenQuestion(!openQuestion);
  };
  return (
    <div className=" divide-y-2 ">
      <div className="flex  items-center justify-between py-2">
        <div className=" text-fuchsia-950 hover:text-pink-700">{question}</div>
        {openQuestion ? (
          <img
            onClick={handleOpenQuestion}
            src={minusIcon}
            alt="minus-icon"
            className="w-12 h-12 "
          />
        ) : (
          <img
            onClick={handleOpenQuestion}
            src={plusIcon}
            alt="plus-icon"
            className="w-12 h-12 "
          />
        )}
      </div>

      <div className={`${openQuestion ? "" : "hidden"}` + "  py-2"}>
        <Answer answer={answer} />
      </div>
    </div>
  );
};

export default AccordionLine;
