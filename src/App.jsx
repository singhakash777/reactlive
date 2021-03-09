import React from 'react';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import { Redirect, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import Weather from './Weather';
import Covid from './Covid';

const App = () =>{
    return (<>
    <Navbar/>
    <Switch>
        <Route  exact path="/" component={Home}/>
        <Route exact  path="/about" component={About}/>        
        <Route exact path="/service" component={Service}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/weather" component={Weather}/>
        <Route exact path="/covid" component={Covid}/>
        <Redirect to="/"></Redirect>
    </Switch>
    <Footer/>
   
    </>);
}

export default App;