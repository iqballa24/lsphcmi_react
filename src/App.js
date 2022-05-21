import "./assets/css/main.css";
import Homepage from "view/Homepage";
import About from "view/About";
import Scheme from "view/Scheme";
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
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
