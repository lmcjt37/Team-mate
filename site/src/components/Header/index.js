import React, { Component } from 'react'
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { siteMetadata as config } from '../../../gatsby-config'

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <Navbar id="mainNav" className="fixed-top" light expand="lg">
        <Container>
          <NavbarBrand className="js-scroll-trigger" href="#page-top">{config.title}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="js-scroll-trigger" href="#download">Download</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="js-scroll-trigger" href="#features">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="js-scroll-trigger" href="#contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}
