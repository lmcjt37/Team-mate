import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { siteMetadata as config } from '../../gatsby-config'

import 'bootstrap/dist/css/bootstrap.css';
import 'simple-line-icons/css/simple-line-icons.css'
import 'font-awesome/css/font-awesome.css'
import './index.css'
import './device-mockups/device-mockups.min.css'
import './main.js'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title={config.title}
      meta={[
        { name: 'description', content: `${config.description}` },
        { name: 'keywords', content: `${config.keywords}` },
      ]}
    />
      {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
