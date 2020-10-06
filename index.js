import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import  Header from "./components/headerComponents";
import Footer from "./components/FooterComponent"
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,Route} from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
        <Header />
    <Router>
      <App/>
    </Router>
   <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
