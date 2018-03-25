import React, { Component } from 'react'
import { Container } from 'reactstrap';

import { siteMetadata as config } from '../../../gatsby-config'

class Footer extends Component {
  render () {
    return (
      <footer>
        <Container>
          <p>&copy; {config.title} {new Date().toLocaleDateString('en-GB', {year:"numeric"})}. All Rights Reserved.</p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#">Privacy</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Terms</a>
            </li>
            <li className="list-inline-item">
              <a href="#">FAQ</a>
            </li>
          </ul>
        </Container>
      </footer>
    )
  }
}

export default Footer
