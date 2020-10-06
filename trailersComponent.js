import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { Row } from 'reactstrap';
class YoutubeLink extends Component {

    VideoOnReady(event) {
        event.target.pauseVideo();
      
      }
  render(props) {
    const opts = {
     
      playerVars: {
        autoplay: 1,
      },
    };
const {videoId}= this.props
return(
<Row className=" container col img-responsive"> <YouTube width="560" height="315"  src={videoId} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></YouTube>
</Row>)} 
 

}

export default YoutubeLink