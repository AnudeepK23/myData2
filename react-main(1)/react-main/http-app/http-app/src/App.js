import './App.css';
import Students from './components/students';
import Poststd from './components/poststudents';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home';

function App() {
  return (
    <Router>
      <div className='App'>
        <h1> React Router </h1>
        <ul className='Link' type='none'>
          <li> <Link to={'/'}>Home</Link></li>
          <li> <Link to={'/save'}>Add-Students</Link></li>
          <li> <Link to={'/student'}>View-Students</Link></li>
        </ul>
        <hr/>
        <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/save' component={Poststd} />
              <Route exact path='/student' component={Students} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
