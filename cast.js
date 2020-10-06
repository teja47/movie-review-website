import React from 'react';
import axios from 'axios';
import {Card,CardImg,CardBody,CardText, CardTitle} from 'reactstrap';
class Casty extends React.Component{

    state={
        cast:[]
    }

    componentDidMount(){
        const articalNAME=this.props.match.params.articalNAME
        axios.get(`http://127.0.0.1:8000/cast/${articalNAME}`)
    .then(res => {
      this.setState({
        cast: res.data
      });
      console.log(this.state.cast.name)
    })
    }
    render(){
       
        return(
            <div className="btn-flat margintop20">
                <div className="container ">
                        <Card className="btn-flat">
                            <CardImg  style={{width:170,height:200}} src={this.state.cast.photos}/> 
                            <CardBody>
                                <CardText>
                                    {this.state.cast.content}
                                </CardText>
                            </CardBody>
                        </Card>
                </div>
            </div>
        )
    }
}

export default Casty