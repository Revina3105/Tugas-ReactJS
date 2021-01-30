import React from 'react'
import PropTypes from 'prop-types'

function Portfolio(name) {
    return (
        <div>
            <h1 className='portfolio'>PORTFOLIO, {name}</h1>
        </div>
    )
}

Portfolio.propTypes = {
    name: PropTypes.string
}

export default Portfolio

