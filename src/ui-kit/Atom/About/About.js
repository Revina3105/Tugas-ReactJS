import React from 'react'
import PropTypes from 'prop-types'

function About(name) {
    return (
        <div>
            <h1 className='about'>ABOUT US, {name}</h1>
        </div>
    )
}

About.propTypes = {
    name: PropTypes.string
}

export default About

