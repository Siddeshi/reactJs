import React from 'react';
import Alert from '../Alert/Alert';
import './CartError.css';

export default function CartError() {
    return (
        <Alert title="items not found" type="error">
            <div> Items are out of stock</div>
        </Alert>
    )
}