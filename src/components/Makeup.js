import React from 'react'
import PropTypes from 'prop-types'

const Makeup = ({
    name, 
    imageUrl, 
    description, 
    website_link
}) => (
    <div className="single-makeup">
        <h2>{name}</h2>
        <img src= {imageUrl} alt={name}/>
        <p>description: {description}</p>
        <p>website: {website_link}</p>
    </div>
)

Makeup.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    website_link: PropTypes.string.isRequired,

}

export default Makeup