import React from 'react';
import Carousel from 'react-bootstrap/Carousel'


function Trailers(props){

    const data= props.data 
    const res=[]
    for(const dat of data){
        res.push(
            <Carousel.Item>
        <iframe className=" carousel" src={dat} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            
        </iframe></Carousel.Item>)
    }
return(
    <div className="black  " >
    <div className="container margintop10 carousel">
        <Carousel  
               interval="1500" >
            {res}
        </Carousel>
    </div>
    </div>
)

}

export default Trailers