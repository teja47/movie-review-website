import React, { Component } from 'react';
import { Navbar, NavbarBrand,Form,FormControl,Button, Input } from 'reactstrap';
import {Row,Col,Container} from 'react-bootstrap'

class Header extends Component{
    render(){
            return(
               
                  
                <Navbar className="d-flex row fixed-top  "  dark style={{backgroundColor: "#0f0e0e"}} >
                <div className="container ">
                <NavbarBrand href="/">
                        <img src="/assets/arereyyycircle.png"  height="48" width="48" alt="Arereyyy"/>
                </NavbarBrand>
               
                <Form inline className="col-8 col-md-3  container"> 
                         <div className="search-container col  ">
                        <input type="text" className="search-box " placeholder="vethuku vethakali.."/>
                        <button className="search-button">Go</button>
                        </div>
                 </Form>
                 </div>
                </Navbar>  
                
        );
    }
}

export default Header;