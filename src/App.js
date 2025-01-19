import Blog from "./components/Blog";
import Faq from "./components/Faq";
import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TestimonialCard from "./components/TestimonialCard";
import Trial from "./components/Trial";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeatureCard />
      <TestimonialCard />
      <Faq />
      <Blog />
      <Trial />
      <Footer />
    </div>
  );
}

export default App;
