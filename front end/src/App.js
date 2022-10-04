import './style.css';
// import route and components
import {Route, Switch} from "react-router-dom"
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';

import Home from './pages/Home';
import Feed from './pages/Feed'
import UserPage from './pages/UserPage'
import About from './pages/About.Js';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      <Route exact path="/feed">
        <Feed />
      </Route>
        <Route exact path="/login">
          <LogInPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/user">
          <UserPage />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
