/**
* Footer component of application
*/

import React, { Component } from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    const footerstyle = {
      "background": "lightGrey",
      "paddingTop": "1.5rem",
      "paddingBottom": "1.5rem",
      "marginTop":'auto',
      "bottom": "0"
    }
    return (
      <footer className="footer footer-fixed-bottom footer-expand-sm footer-dark px-sm-5" style={footerstyle}>
        <ul className="footer-nav align-items-left list-unstyled">
          <li className="footer-item ml-5">
            <Link to="/privacy" className="footer-link" style={{"color":"white"}}>Privacy Policy</Link>
          </li>
        </ul>
      </footer>
    );
  }
}

// const FooterWrapper = styled.footer`
//   background: var(--lightGrey);
//   padding-top: 1.5rem;
//   padding-bottom: 1.5rem;
//   margin-top:'auto';
//   bottom: 0;
//   .footer-link{
//     color: var(--mainWhite);
//   }
// `;
