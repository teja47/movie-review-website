import React, { Component } from 'react';
import axios from 'axios';
import {Row,Col,Container} from 'react-bootstrap'
import {Card,CardBody,CardText,CardImg} from 'reactstrap';
class Posters extends Component {
  state={
    artical: { }
  }
  componentDidMount(){
    const  articalID= Math.floor(8 + Math.random() * (5-1));
    axios.get(`http://127.0.0.1:8000/pos/${articalID}`)
    .then(res => {
      this.setState({
        artical: res.data
      });
    
    })
  }
    render(){
        return(
          <Container className="margintop20 black container">
    <Card className="black container align-self-center"   >
    <CardImg className=" col-md-6   col-sm-12 d-flex img-responsive offset-lg-2 "  src={this.state.artical.poster} />
</Card>
</Container>
)
}
}

export default Posters