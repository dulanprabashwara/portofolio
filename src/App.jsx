import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import Services from "./components/services/Services";
import Mywork from "./components/Mywork/Mywork";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      {/* <Services /> */}
      {/* <Mywork /> */}
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
