import React from 'react';
import PropTypes from 'prop-types'
import './AnimalCard.css';

export default function AnimalCard( {
    name,
    scientificName,
    size,
    diet,
    additional,
    showAdditional
}) {    
    return <div className = "animal-wrapper">
        <h1>{name}</h1>
        <h2>{scientificName}</h2>
        <h3>{size}kg</h3>
        <div>{diet.join(', ')}.</div>
        <button onClick={() => showAdditional(additional)}>More Info</button>
    </div>
}

AnimalCard.prototypes = {
    additional: PropTypes.shape({
        link: PropTypes.string,
        notes: PropTypes.string
    }),
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    scientificName: PropTypes.string.isRequired,
    showAdditional: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired
}

AnimalCard.defaultProps = {
    additional: {
        notes: 'No additional information'
    }
}