import React from 'react'

import Header from './header'
import Footer from './footer'

import '../assets/stylesheets/reset.scss'
import layoutStyles from '../assets/stylesheets/layout.module.scss'


const Layout = (props) => {
  return (
    <div>
      <Header className={layoutStyles.header} />
        {props.children}
      <Footer />
    </div>
  )
}

export default Layout