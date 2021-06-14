import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Containers/Header/Header";
import ProductList from "./Containers/ProductList/ProductList";
import ProductDetails from "./Containers/ProductDetails/ProductDetails";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <ProductList />
        </Route>
        <Route path="/product/:productId">
          <ProductDetails />
        </Route>
        <Route>404</Route>
      </Switch>
    </Router>
  );
}

export default App;
