import './style.css';
// import route and components
import {Route, Switch} from "react-router-dom"
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import About from './pages/About.Js';
import Home from './pages/Home';
import Feed from './pages/Feed'
import UserPage from './pages/UserPage'
import Settings from './pages/Settings';
import { useEffect, useState } from 'react';
import Settings from './pages/Settings';




function App() {
  const [user, setUser] = useState(null);

  // get all user data from MongoDB
  const URL = "http://localhost:4000/user/";
  const getUser = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setUser(data);
  }

  useEffect(() => { getUser() }, []);

  console.log(user)

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
        <Route 
          path="/user/:userid" 
          render={(routerProps) => <UserPage {...routerProps} users={user}/>}/>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/settings'>
          <Settings />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
