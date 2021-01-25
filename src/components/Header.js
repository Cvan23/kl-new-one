import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span><i class="fas fa-pen-fancy fa-2x"></i></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Kirsten Larson</h1>
        <p><strong>Objective:</strong> To artfully reflect and comment on culture through story so that the reader may feel less alone in the world. To strive to support other artists whenever possible.</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            <strong>Publications</strong>
          </button>
        </li>
            {/* Work section disabled at client's request for now */}
        {/* <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li> */}
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            <strong>About</strong>
          </button>
        </li>
            {/* Contact section disabled at client's request for now */}
        {/* <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li> */}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
