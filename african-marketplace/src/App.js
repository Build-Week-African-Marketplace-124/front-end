import './App.css';
import {Switch, Route} from "react-router-dom";
//import login/register component, regular Route - Liz
// private routes for home (dashboard), and items and add item form

function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path="/" component={} />
    <PrivateRoute path="/home" component={} />
    </Switch>
    </div>
  );
}

export default App;
