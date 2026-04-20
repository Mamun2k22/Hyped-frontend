import Navbar from "./components/layout/Navbar";
import Brands from "./components/sections/Brands";
import ContentDatScoortSection from "./components/sections/ContentDatScoortSection";
import Expertise from "./components/sections/Expertise";
import Footer from "./components/sections/Footer";
import GethypedHeroSection from "./components/sections/GethypedHeroSection";
import Hero from "./components/sections/Hero";

function App() {
  return (
  <>
      <Navbar />
      <Hero />
          <GethypedHeroSection />
      <Expertise />
  
< ContentDatScoortSection />
<Brands />
      <Footer />
    </>
  );
}

export default App;