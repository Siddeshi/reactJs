import React from 'react';
import PropTypes from 'prop-types'
import './AnimalCard.css';
import AnimalDetails from '../AnimalDetails/AnimalDetails';
import Card from '../Card/Card';

export default function AnimalCard( {
    name,
    scientificName,
    size,
    additional,
    showAdditional,
    ...props
}) {    
    return (
        <Card title="Animal" details={<em>Mammals</em>}>
        <h1>{name}</h1>
        <h2>{scientificName}</h2>
        <h3>{size}kg</h3>
        <AnimalDetails {...props}/>
        <button onClick={() => showAdditional(additional)}>More Info</button>
        </Card>
    )
}

AnimalCard.prototypes = {  
    additional: PropTypes.shape({
        link: PropTypes.string,
        notes: PropTypes.string
    }),
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