import React, { Component } from 'react';
import BaseRouter from './components/Route';
import {BrowserRouter as Router,Route} from 'react-router-dom'

import ArticalView from './components/ArticalView';
import Movie from './components/ArticalDetail';
import Casty from './components/cast';
import Test from './components/test';
import Switch from 'react-bootstrap/esm/Switch';
class App extends Component {
 

  
  render(){
    return(
      <div className="black" >
   
     
        <Switch></Switch>
      <Route  path='/' exact component={ArticalView} />
       <Route  path='/:articalID'exact  component={Movie} />
      <Route  path='/cast/:articalNAME'exact  component={Casty} />
      <Route path='/test'exact component={Test}/>
  
     
   
   
     </div>
    );
}
}
export default App;
