import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default function Card({ children, details, title }) {
    return (
        <div className = "card">
            <div className = "card-details">
                <h1>{ title }</h1>
                { details }
            </div>
            {children}
        </div>
    ) 
}

Card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element.isRequired),
        PropTypes.element.isRequired
    ]),
    title: PropTypes.string.isRequired,
    details: PropTypes.element
}

Card.defaultValue = {
    details: null
}
