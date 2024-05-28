//import { useState } from "react";
import AcccordionPage from "./pages/AcccordionPage";
import "./App.css";
import desktopBG from "./assets/images/background-pattern-desktop.svg";
import mobileBG from "./assets/images/background-pattern-mobile.svg";

function App() {
  return (
    <div className="relative overflow-hidden flex items-center justify-center w-screen min-h-screen">
      <img
        className="absolute w-full top-0 left-0 inset-0 hidden  md:block"
        src={desktopBG}
      />
      <img
        className="absolute w-full top-0 left-0 inset-0 md:hidden "
        src={mobileBG}
      />
      <AcccordionPage />
    </div>
  );
}

export default App;
