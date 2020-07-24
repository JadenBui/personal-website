import React, { useRef, Fragment } from "react";
import IntroducePage from "./Pages/IntroducePage";
import AboutPage from "./Pages/AboutPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  const skillRef = useRef();
  const aboutRef = useRef();

  const onLinkClick = (link) => {
    switch (link) {
      case "about":
        aboutRef.current.scrollIntoView({
          behavior: "smooth",
        });
        break;
      case "skill":
        skillRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
        break;
      case "work":
        aboutRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
    }
  };
  return (
    <div className="App">
      <Navbar onLinkClick={onLinkClick} />
      <div ref={skillRef}>
        <IntroducePage />
      </div>
      <div ref={aboutRef}>
        <AboutPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
