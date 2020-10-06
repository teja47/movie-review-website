import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {NavbarBrand} from 'reactstrap'
function Footer() {
    return(
       
            <MDBFooter  className="font-small btn-flat pt-4 mt-4">
              <MDBContainer fluid className="text-center btn-flat text-md-left container">
                <MDBRow className="btn-flat">
                  <MDBCol md="6"className="btn-flat" >
                    <h5 className="title">arereyyy </h5>
                    <p>
                     Telugu Movie Updates and Fun Reviews..  
                    </p>
                  </MDBCol>
                  <MDBCol md="6" className="btn-flat">
                    <h5 className="title">connect with us!</h5>
                    <ul className="align-text-center container " >
                      <li className="list-unstyled fa fa-youtube marginright10">
                        <a href="https://www.youtube.com/channel/UCwVPJpwRnQcCA42ZmBMrjDQ/videos?view_as=subscriber"></a>
                      </li>
                      <li className="fa fa-twitter marginright10">
                        <a href="http://twitter.com/arereyyy"></a>
                      </li>
                      <li className="fa fa-facebook ">
                        <a href="https://www.facebook.com/arereyyy"></a>
                      </li>
                      {/* <li className="list-unstyled">
                        <a href="#!">Link 4</a>
                      </li> */}
                    </ul>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
              <div className="footer-copyright text-center  py-3 btn-flat">
                {/* <MDBContainer fluid className="btn-flat container align-text-center">
                  &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
                </MDBContainer> */}
              </div>
            </MDBFooter>
          );
        }
export default Footer;

{/* <div className="footer " style={{backgroundColor: "#0f0e0e"}} >
<div className="container ">
   <div className="row justify-content-center">             
        <div className="col-12 col-sm-4 whiteD ">
            <div className=" flexRight margintop10 align-self-center  justify-content-center" >
                <a className=" marginright10" href=""><i className=""></i></a>
                <a className=" marginright10 " href=""><i className=""></i></a>
                <a className=" marginright10 " href=""><i className=""></i></a>
             
            </div>
        </div>
    </div>
</div>
</div>
);
} */}
