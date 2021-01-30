import React from 'react'
import PropTypes from 'prop-types'

function index(name) {
    return (
        <div>
            <h1 className='frontend'>Front End Developer, {name}</h1>
        </div>
    )
}

index.propTypes = {
    name: PropTypes.string
}

export default index

