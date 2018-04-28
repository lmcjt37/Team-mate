import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';

import { siteMetadata as config } from '../../../gatsby-config'

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="contact bg-primary scrollspy-section" id="contact">
        <div className="container">
          <h2>We
            <i className="fa fa-heart"></i>
            new friends!</h2>
          <ul className="list-inline list-social">
            <li className="list-inline-item social-twitter">
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item social-facebook">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li className="list-inline-item social-google-plus">
              <a href="#">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Contact
