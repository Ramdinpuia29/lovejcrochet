import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Footer />
    </Router>
  );
};

export default App;
