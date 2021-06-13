import React from 'react';
import PropTypes from 'prop-types'
import './AnimalDetails.css';


function convertTextToEmoji(text) {
    switch (text) {
        case 'insects':
            return '🐜';
        case 'meat':
            return '🍖';
        case 'plants':
        default:
            return '🌱';                
    }
}

export default function AnimalDetails({ diet }) {

    return(
        <div className = "animal-details">
            <h4> Details:</h4>
            <div>
                Diet: { diet.map(food => convertTextToEmoji(food)).join(', ') }
            </div>
        </div>
    )
}

AnimalDetails.prototypes = {
    diet: PropTypes.arrayOf(PropTypes.string).isRequired
}
