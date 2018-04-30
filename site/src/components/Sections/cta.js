// *** Leaving in for future use ***
import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';

import { siteMetadata as config } from '../../../gatsby-config'

class CTA extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="cta scrollspy-section" id="register">
        <div className="cta-content">
          <div className="container">
            <h2>Stop waiting.<br/>Start building.</h2>
            <a href="#contact" className="btn btn-outline btn-xl js-scroll-trigger">Let's Get Started!</a>
          </div>
        </div>
        <div className="overlay"></div>
      </section>
    )
  }
}

export default CTA
