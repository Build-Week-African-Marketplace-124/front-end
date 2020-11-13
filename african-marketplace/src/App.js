import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from "./components/Home/Home";
//import login/register component, regular Route - Liz
// private routes for home (dashboard), and items and add item form
// home needs to be private

function App() {
  return (
    <div className="App">
    <Switch>
    <Route path="/" component={Home} />
    </Switch>
    </div>
  );
}

export default App;
