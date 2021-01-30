import React from 'react'
import PropTypes from 'prop-types'

function Service(name) {
    return (
        <div>
            <h1 className='service'>SERVICE, {name}</h1>
        </div>
    )
}

Service.propTypes = {
    name: PropTypes.string
}

export default Service

