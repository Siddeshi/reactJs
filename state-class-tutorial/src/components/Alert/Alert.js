import React from 'react';
import PropTypes from 'prop-types';

export default function Alert({ children, title, type}) {
    return(
        <div className={`alert-wrapper ${type}`}>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

Alert.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element.isRequired),
        PropTypes.element.isRequired
    ]),
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired    
}