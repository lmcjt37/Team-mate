import React, { Component } from 'react'

import { siteMetadata as config } from '../../../gatsby-config'

import Masthead from "./masthead"
import Download from "./download"
import Features from "./features"
import CallToAction from "./cta"
import Contact from "./contact"

class Sections extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Masthead/>
        <Download/>
        <Features/>
        <CallToAction/>
        <Contact/>
      </div>
    )
  }
}

export default Sections
