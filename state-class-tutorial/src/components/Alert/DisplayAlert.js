import React from 'react';
import CartError from '../CartError/CartError';
import CartSuccess from '../CartSuccess/CartSuccess';

export default function DisplayAlert() {
    return (
        <div>
            <CartError/>
            <CartSuccess/>
        </div>
    )
}