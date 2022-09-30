<<<<<<< HEAD
import './App.css';
// import route and components
import {Route, Switch} from "react-router-dom"
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import Header from './components/Nav';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
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
=======
import './style.css';
import Nav from './components/Nav';

function App() {
  return (
    <div className='app'>
       <Nav />
       </div>
>>>>>>> nav bar is functional
  );
}

export default App;
