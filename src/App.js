import "./App.scss";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CustomizedMenu from "./Pages/CustomizedMenu/CustomizedMenu";
import RandomMenu from "./Pages/RandomMenu/RandomMenu";
import Recipe from "./Pages/Recipe/Recipe";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/customized-menu" component={CustomizedMenu} />
        <Route path="/random-menu" component={RandomMenu} />
        <Route path="/recipe/:id" component={Recipe} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
