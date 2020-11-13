import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Register from './components/Users/Register';
import Login from './components/Users/Login';
//import login/register component, regular Route - Liz
// private routes for home (dashboard), and items and add item form
// home needs to be private

function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path='/register' component={Register} />
    <Route path='/login' component={Login} />
    </Switch>
    </div>
  );
}

export default App;
