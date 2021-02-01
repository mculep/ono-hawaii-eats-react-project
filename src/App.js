import './App.css';
import About from "./components/About";
import Header from './components/Header'
import FoodPlace from './components/FoodPlace';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Link,
  Switch,
  Route
  } from "react-router-dom";

// Get data from api

function App() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get('https://hawaii-grinds-api.herokuapp.com/hawaii-food')
    .then((url) => {
    console.log(url.data)
    setPlaces(url.data)
    })
    
  }, [])

  //Routers

  return (
    <Router>
      <div className="container">
        <Header />
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>

        <Switch>
          <Route path="/" exact>
          <FoodPlace places={places} />
          </Route>

          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
