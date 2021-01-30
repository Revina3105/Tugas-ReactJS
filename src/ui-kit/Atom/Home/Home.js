import React from 'react'
import PropTypes from 'prop-types'

function Home(name) {
    return (
        <div>
            <h1 className='home'>WELCOME HOME, {name}</h1>
        </div>
    )
}

Home.propTypes = {
    name: PropTypes.string
}

export default Home

