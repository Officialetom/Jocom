import React from 'react'
import Navbar from "./Components/Navbar";
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Home from './Components/Pages/Home';
import Courses from './Components/Pages/Courses';
import AboutUs from './Components/Pages/AboutUs';
import Footer from './Components/Pages/Footer';
import SignUp from './Components/Pages/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/courses"  component={Courses}/>
        <Route path="/about-us"  component={AboutUs}/>
        <Route path="/sign-up"  component={SignUp}/>
      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;
