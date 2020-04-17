import React from 'react';
import {useSelector} from 'react-redux';

export default function ShoppingCart(props) {
    let {items, selections} = useSelector(state => state);
    let totalWeight = 0;
    let totalPrice = 0;

    if (typeof selections !== 'undefined') {
        totalWeight = selections
            .map(selection => selection.weight)
            .reduce((total, val) => {return total + val}, 0);

        totalPrice = selections
            .map(selection => getItemById(items, selection.id).price * selection.weight)
            .reduce((total, val) => {return total + val}, 0);
    }

    return (
        <div>
            <p>
                <label>Total Weight: </label>{totalWeight}
            </p>
            <p>
                <label>Total Price: </label>{totalPrice}
            </p>
        </div>
    )
}

function getItemById(items, id) {
    return items.find(item => item.id === id);
}