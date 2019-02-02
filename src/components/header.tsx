import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import atom from '../images/atom.gif';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `#000`,
      marginBottom: `1.45rem`,
      borderBottom: `1px solid black`,
      textAlign: `center`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#fff`,
            textDecoration: `none`,
          }}
        >
        <img src={atom} />
          {siteTitle}
        <img src={atom} />
        </Link>
      </h1>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
