import React from 'react';
import { Card, CardBody, CardImg,CardText, CardTitle,NavLink } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom'
const MovieCast=(props)=>{
 
   const data=props.data.tes
   console.log(data)
   const rest=[]

     data.map(dat=>{
      rest.push(
        <div>
            <a  href={`/cast/${dat}`}> <div  className="marginright10"  > {dat} </div> </a>
         </div>
     )
  
     })
       
  
return(
  <div className="btn-flat " >
  <div> 
      <div className="roww ">
        {rest}
      </div>
  </div>
  </div>
)
 
}

export default MovieCast