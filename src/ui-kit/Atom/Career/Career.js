import React from 'react'
import PropTypes from 'prop-types'

function Career(name) {
    return (
        <div>
            <h1 className='career'>CAREER , {name}</h1>
        </div>
    )
}

Career.propTypes = {
    name: PropTypes.string
}
export default Career
