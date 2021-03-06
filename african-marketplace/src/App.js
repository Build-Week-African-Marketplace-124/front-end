import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Register from './components/Users/Register';
import Login from './components/Users/Login';
import Market from "./Cards/Items";
// private routes for home (dashboard), and market and product-form
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Users/Profile';
import AddForm from "./components/Item-Form/Product-Form";
import Cart from "./components/Cart/ShoppingCart";

function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path='/register' component={Register} />
    <Route path='/login' component={Login} />
    <Route path="/market" component={Market} />
    <Route path="/item-form" component={AddForm} />
    <Route path="/cart" component={Cart} />
    <PrivateRoute path='/profile/:id' component={Profile} />
    </Switch>
    </div>
  );
}

export default App;
