import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import "./styles/App.css";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <ProductCard/>
    </div>
  );
}

export default App;
