import React, { Component } from 'react';
import MovieCast from './MovieCast';
import axios from 'axios';
class Avatar extends Component{
    constructor(props){
        super(props)
       this.state={
        artical:[],
        data:this.props.data.tes
    }
this.componentDidMoun = this.componentDidMoun.bind(this)
}

componentDidMoun=()=>{
this.props.data.tes.map(dat=>{
     console.log(dat)
   const articalNAME=dat
   axios.get(`http://127.0.0.1:8000/cast/${articalNAME}`)
   .then(res=>{ 
       this.setState({
           artical:res.data
       })
       //console.log(res.data)
          
   })

          
         })
         
  
        }
render(){
    
    const names=[{name:this.props.data.tes}]
   // console.log(names)
    const t=this.props.data.tes
   // console.log(t)
   console.log(this.state.artical)
   const cc=[]
   
return(
  
  <div>   { } </div>
)

}

}

export default Avatar