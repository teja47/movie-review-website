import React from 'react';
import axios from 'axios';
import Trailer from './corouselComponent'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel'
class TrailerClass extends React.Component {

    state={
      artical: { },
      tes: []
      
    }
    componentDidMount(){
        const articalID=1
      axios.get(`http://127.0.0.1:8000/trailers/${articalID}`)
      .then(res => {
        this.setState({
          artical: res.data
        });
            const test = this.state.artical.links
            const arrays= test.split(" ")
            this.setState({
                tes: arrays
            })      })
      
    }

render(){
    return (
        <div >
                   <Trailer  data={this.state.tes} />  
        </div>
    );
 }
}

export default TrailerClass