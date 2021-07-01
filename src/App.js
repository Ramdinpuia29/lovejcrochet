import { Route } from "react-router-dom";
import Background from "./components/Background";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Products from "./pages/Products";
import MyOrders from "./pages/MyOrders";
import Order from "./pages/Order";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Background>
      <Route path="/" exact component={Home} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/products" exact component={Products} />
      <Route path="/myorders" exact component={MyOrders} />
      <Route path="/order" exact component={Order} />
      <Route path="/signup" exact component={Signup} />
      <Footer />
    </Background>
  );
};

export default App;
