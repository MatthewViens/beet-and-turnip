import React from 'react'

import headerStyles from '../assets/stylesheets/header.module.scss'

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div>
        <h3>Alkinoos Taverna</h3>
        <nav>
          <ul>
            <li>Menu</li>
            <li>About</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header