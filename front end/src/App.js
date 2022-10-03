import './style.css';
// import route and components
import {Route, Switch} from "react-router-dom"
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import Header from './components/Nav';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/welcome">
        </Route>
      <Header />
      <Route exact path="/feed">
      </Route>
        <Route exact path="/">
        </Route> 
        <Route exact path="/login">
          <LogInPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
      </Switch>
    </div>

  );
}

export default App;
