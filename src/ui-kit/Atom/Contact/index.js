import React from 'react'
import PropTypes from 'prop-types'

function Contact(name) {
    return (
        <div>
            <h1 className='contact'>CONTACT, {name}</h1>
        </div>
    )
}

Contact.propTypes = {
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

export default Contact

