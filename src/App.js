import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/signin" component={SigninPage} />
      </Switch>
    </Router>
  );
}

export default App;
