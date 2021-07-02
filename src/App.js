import { Route, Switch } from "react-router-dom";
import Background from "./components/Background";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Products from "./pages/Products";
import MyOrders from "./pages/MyOrders";
import Order from "./pages/Order";
import Signup from "./pages/Signup";
import OrderPlaced from "./pages/OrderPlaced";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Background>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/order" exact component={Order} />
        <Route path="/orderplaced" exact component={OrderPlaced} />
        <Route path="/products" exact component={Products} />
        <Route path="/myorders" exact component={MyOrders} />
        <Route path="/signup" exact component={Signup} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Background>
  );
};

export default App;
