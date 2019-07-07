import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import atom from '../images/atom.gif';

const Header = ({ siteTitle }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`
    }}
  >
      <img style={{width: '40px', paddingTop: '20px'}} src={atom} />
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: `#fff`,
          textDecoration: `none`,

        }}
      >
      <span>
        {siteTitle}
      </span>
      </Link>
    </h1>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
