import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to={"/trails"}>Rutas</Link>
        </nav>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/trails"]} component={TrailsList} />
            <Route exact path="/add" component={AddTrail} />
            <Route path="/tutorials/:id" component={Trail} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
