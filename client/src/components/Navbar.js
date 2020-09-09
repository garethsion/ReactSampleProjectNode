/**
* Header component of application
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
// import styled from 'styled-components';
export default class Navbar extends Component {

  render() {
    const style = {
      "background":"darkBlue",
      "fontSize":"1.3rem",
      "textTransform":"capitalize"
    }
    return (
      <navbar className="navbar navbar-dark" style={style}>
        <Link to="/">
          <img src={logo} alt="logo" className="navbar-brand" style={{width:'20%', height:'20%'}}/>
        </Link>
      </navbar>
    );
  }
}

// const NavWrapper = styled.nav`
//   background: var(--mainBlue);
//   .nav-link{
//     color: var(--mainWhite) !important;
//     font-size: 1.3rem;
//     text-transform: capitalize;
//   }
// `
