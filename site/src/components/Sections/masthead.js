import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';

import { siteMetadata as config } from '../../../gatsby-config'

class Masthead extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="masthead">
        <Container className="h-100">
          <Row className="h-100">
            <Col lg="7" className="my-auto">
              <div className="header-content mx-auto">
                <h1 className="mb-5">New Age is an app landing page that will help you beautifully showcase your new mobile app, or anything else!</h1>
                <Button outline size="xl">Start Now for Free!</Button>
              </div>
            </Col>
            <Col lg="5" className="my-auto">
              <div className="device-container">
                <div className="device-mockup iphone6_plus portrait white">
                  <div className="device">
                    <div className="screen">
                      <img src="/images/demo-screen-1.jpg" className="img-fluid" alt=""/>
                    </div>
                    <div className="button">
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    )
  }
}

export default Masthead
