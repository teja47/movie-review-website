import React, { Component } from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import ArticalView from './ArticalView';
import ArticalDetail from './ArticalDetail';
import Casty from './cast';
import Test from './test';
const BaseRouter =() =>(

    <Switch>
        <ul>
            <li>
            <Route  path='/' exact component={ArticalView} />

            </li>
            <li>
            <Route  path='/:articalID'exact  component={ArticalDetail} />
            </li>
            <li>
            <Route  path='/:articalNAME'exact  component={Casty} />
            </li>
            <li>
            <Route path='/test'exact component={Test}/>
            </li>
        </ul>
      
      
       
        
        
    </Switch>

);
export default BaseRouter;