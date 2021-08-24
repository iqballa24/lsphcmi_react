import './assets/css/main.css';
import Homepage from "view/Homepage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/about">
            <h1>HLOO</h1>
          </Route>
          <Route path="/users">
            <Homepage />
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
