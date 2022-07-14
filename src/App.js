import "./assets/css/main.css";
import Homepage from "view/Homepage.tsx";
import About from "view/About";
import Scheme from "view/Scheme";
import Contact from "view/Contact";
import Galery from "view/Galery";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/scheme">
            <Scheme />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/gallery">
            <Galery />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
