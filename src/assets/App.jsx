import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from "./logo.png"
import Films from "./Films";
import Home from "./Home"
import MoreInfo from "./MoreInfo"
import People from "./People"
import CharacterInfo from "./CharacterInfo"


class App extends Component {
    render(){
    return (
         <Router>
             
           
            <Home/>
             <Switch>
         
                <Route  exact path="/films" component={Films} />
                <Route path="/films/:id" component={MoreInfo} />
                <Route  exact path="/people" component={People} />
                <Route path="/people/:id" component={CharacterInfo} />
            </Switch>
           
            
                

            
        </Router>
    )}
}

export default App
