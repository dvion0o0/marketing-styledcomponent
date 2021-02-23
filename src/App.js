import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Home from "./pages/HomePage/Home";
import Products from "./pages/Products/Products";
import Services from "./pages/Services/Services";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/Services" exact component={Services} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
