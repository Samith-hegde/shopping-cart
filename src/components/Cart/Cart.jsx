import React from 'react';
import { useState } from 'react';

function Cart({ inventory, changeQuantity }) {
    const [isEmpty, setIsEmpty] = useState(true);

    if (!inventory) {
        return <p>Loading...</p>;
    }

    for (let item of inventory) {
        if (!isEmpty) {
            break;
        }
        if (item.quantityOrdered > 0) {
            setIsEmpty(false);
        }
    }

    if (!isEmpty) {
        return (
            <div className="shop-container">
                <ul className="inventory-items">
                    {inventory.map((item) => {
                    if (item.quantityOrdered > 0) {
                        return (
                            <li key={item.id}>
                                <img src={item.image} alt={item.title} />
                                <h3>{item.title}</h3>
                                <p>{item.price}</p>
                                <p>{item.category}</p>
                                <section>
                                    <button onClick={() => changeQuantity(item.id, 'decrement')}> - </button>
                                    <p>{item.quantityOrdered}</p>
                                    <button onClick={() => changeQuantity(item.id, 'increment')}> + </button>
                                </section>
                            </li>
                        )
                    }
                    return null;
                    })}
                </ul>
            </div>
        )
    }

    return (
        <div>
            <h1> Your cart is empty! Find the best deals on the best products in the Shop page! </h1>
        </div>
    );
}

export default Cart;