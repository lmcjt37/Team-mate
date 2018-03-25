import React, { Component } from 'react'

import Header from "../components/Header";
import Footer from "../components/Footer";

class IndexPage extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Header/>
        <h1>Hi people</h1>
        <Footer/>
      </div>
    )
  }
}

export default IndexPage
