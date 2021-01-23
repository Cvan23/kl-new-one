import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p><a href="https://koa-script.netlify.app/" target="-blank"><i class="fas fa-code"></i> Built By KoaScript <i class="fas fa-cat"></i></a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
