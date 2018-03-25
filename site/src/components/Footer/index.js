import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'reactstrap';

import { siteMetadata as config } from '../../../gatsby-config'

const Footer = () => (
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
)

export default Footer
