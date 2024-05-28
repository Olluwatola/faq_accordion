//import { useState } from "react";
import AcccordionPage from "./pages/AcccordionPage";
import "./App.css";
import desktopBG from "./assets/images/background-pattern-desktop.svg";
import mobileBG from "./assets/images/background-pattern-mobile.svg";

function App() {
  return (
    <div className="relative overflow-hidden flex items-center justify-center w-screen min-h-screen px-2 py-6">
      <img
        className="absolute w-full top-0 left-0 inset-0 hidden  md:inline"
        src={desktopBG}
      />
      <img
        className="absolute w-full object-cover top-0 left-0 inset-0 md:hidden h-[35%]"
        src={mobileBG}
      />
      <AcccordionPage />
    </div>
  );
}

export default App;
