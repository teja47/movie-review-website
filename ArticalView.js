import React, { Component } from 'react';
import axios from 'axios';
import Pass from './Pass'
import Posters from "./postersComponent";
class ArticalView extends Component {
  state={
    articals: []
  }
  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/')
    .then(res => {
      this.setState({
        articals: res.data
      });
     

    })
  }
  render(){
      return(
        <div>
          <Posters/>
        <div className="margintop10">
         <Pass data={this.state.articals}  />
        </div>
        </div>
   
                
          
      );
  }
}


export default ArticalView;
