import './style.css';
// import route and components
import {Route, Switch} from "react-router-dom"
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import Header from './components/Nav';

import Home from './pages/Home';
import Feed from './pages/Feed'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/welcome">
          <Home />
        </Route>
      <Header />
      <Route exact path="/feed">
        <Feed />
      </Route>
        <Route exact path="/">
        </Route> 
        <Route exact path="/login">
          <LogInPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/feed">
          <Feed />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
