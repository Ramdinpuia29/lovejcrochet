import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Route path="/" exact component={Hero} />
      <Footer />
    </>
  );
};

export default App;
