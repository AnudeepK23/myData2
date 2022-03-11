import React, { Component } from 'react';
import {Navbar, Nav} from "react-bootstrap";
import { Link } from "react-router-dom"
import { ProductConsumer } from '../contextApi';

export class Nab extends Component {
    render() {
        return (

            <div>
            <Navbar collapseonselect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="#">React Forest</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav">
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav classname="mr-auto">
                    <Link to="/" />Products
                  </Nav>
                  <Nav>
                    <productconsumer>
                      {'{'}(value)=&gt;{'{'}
                      return <link style={{color: '"mediumspringgreen"}}'}} eventkey="{2}" to="/cart" />
                      My Cart ({'{'}value.Cart.length{'}'})
                      {'}'}{'}'}
                    </productconsumer>
                  </Nav>
                </Navbar.Collapse>
              </Navbar.Toggle></Navbar>
          </div>
        );
    




//             <div>
//                 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

//   <Navbar.Brand href="#">React Forest</Navbar.Brand>
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav className="mr-auto">
//         <Link to="/">Products</Link>
//         </Nav>
//         <Nav>
//             <ProductConsumer>
//                 {(value)=>{
//                     return <Link style={{color:"mediumspringgreen"}} eventKey={2} to="/cart">
//                         My Cart ({value.Cart.length})
//                     </Link>
//                 }}
//             </ProductConsumer>
     
//     </Nav>
//   </Navbar.Collapse>

// </Navbar>
//             </div>
//         )
    }
}

export default Nab
