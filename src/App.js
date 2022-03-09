import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';

import { Switch, Route } from 'react-router-dom'
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Footer from './components/Footer';
import home from './components/Home';
import About from './components/About';
import login from './components/login';
import register from './components/register'
import Chat from './components/chat';
import Payment from './components/payment';
import Thank from './components/thank';
import Searchbar from './components/searchbar';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">


{/* <Route path="/" component={Navbar} /> */}

      
      <Route path="/" component={Nav} />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/home" component={home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={login} />
        <Route exact path="/register" component={register} />
        <Route exact path="/support" component={Chat} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/thank" component={Thank} /> 

        <Route exact path='/search' component={Searchbar} />

      </Switch>

      <Footer />




    </div>
  );
}

export default App;
