import React from 'react';
import './ArticalDetail.css'
import {Card,CardImg} from 'reactstrap';
import {Container} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'; 
import TrailerClass from './trailers';

const Pass=(props)=> {
        const res=[]
 for(const dat of props.data){

 res.push(
    
 <a href= {`/${dat.id}`}  >
  <CardImg
    className="size  justify-content-center "
    type="submit"
    src={dat.image}
 
  />
</a > )
 }
  return( <div> 
    <TrailerClass/>
          <div className="black container  "  >
             <Container >
                  <div className="d-flex justify-content-center col-12 "  >
                          <div className="row">
                            <div className="MultiCarousel" data-items="1,3,5,6" data-slide="1"  data-interval="1000">
                                    <div className="MultiCarousel-inner">
                                        <div className="item">
                                            <div className="d-none d-lg-block">
                                            {res}
                                            </div>
                            
                                        </div>
                                    </div>
                                </div>
                          </div> 
                        </div>
                    </Container>
                    </div>
                    
                    </div>
                  )}    
 export default Pass