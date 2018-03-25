import React, { Component } from 'react'

import Header from "../components/Header";
import Sections from "../components/Sections";
import Footer from "../components/Footer";

class IndexPage extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Header/>
        <Sections/>
        <Footer/>
      </div>
    )
  }
}

export default IndexPage
