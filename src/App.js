import './App.css';
import React from 'react'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './components/SignInPage/SignIn';
import AllRoutesLinks from './components/AllRoutesLinks/AllRoutesLinks';
import Home from './components/Home/Home';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/signIn">
          <SignIn></SignIn>
        </Route>
        <Route path="/allRoute">
          <AllRoutesLinks></AllRoutesLinks>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
